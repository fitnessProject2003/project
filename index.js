import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'pg';
const { Pool } = pkg;
import session from 'express-session';
import bcrypt from 'bcrypt';
import { title } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'fitnessApp',
    password: 'ahmad10',
    port: 5432,
});


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({
        secret: '12345678ahmad87654321',
        resave: false,
        saveUninitialized: true,
    })
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home', user: req.session.user });
});

app.get('/about', (req, res) => {
    res.render('about' , { user: req.session.user });
});

app.get('/gyms', (req, res) => {
    res.render('gyms', { user: req.session.user });
});

app.get('/health', (req, res) => {
    res.render('health', { user: req.session.user });
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Login', user: req.session.user });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body; 
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (result.rows.length > 0) {
            const user = result.rows[0];
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                req.session.user = { id: user.id, username: user.username };
                return res.redirect('/');
            } else {
                // res.send("invalid password"); add window to show that the password is wrong
                res.redirect('/login');
            }
        } else {
            res.send('User not found');
        }
    } catch (err) {
        console.error(err);
        res.send('An error occurred');
    }
});


app.get('/signup', (req, res) => {
    res.render('signup', { title: 'Sign Up', user: req.session.user });
});

app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, username, password, gender } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query(
            'INSERT INTO users (first_name, last_name, email, username, password, gender) VALUES ($1, $2, $3, $4, $5, $6)',
            [firstName, lastName, email, username, hashedPassword, gender]
        );
        res.redirect('/login');
    } catch (err) {
        console.error(err);
        res.send('An error occurred');
    }
});

app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
        }
        res.redirect('/');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});
