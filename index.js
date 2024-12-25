import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'pg';
const { Pool } = pkg;
import session from 'express-session';
import bcrypt from 'bcrypt';
import { title } from 'process';
import { error } from 'console';

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
    res.render('about', { user: req.session.user });
});

app.get('/gyms', (req, res) => {
    res.render('gyms', { user: req.session.user });
});

app.get('/health', (req, res) => {
    res.render('health', { user: req.session.user });
});

app.get('/temp', (req, res) => {
    res.render('temp', { user: req.session.user });
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Login', user: req.session.user, error: null });
});

app.get('/signup', (req, res) => {
    res.render('signup', { title: 'Sign Up', user: req.session.user, error:null });
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
                return res.render('login', {
                    title: 'login',
                    user: req.session.user,
                    error: 'Wrong email or password'
                });
            }
        } else {
            return res.render('login', {
                title: 'login',
                user: req.session.user,
                error: 'invalid user'
            });
        }
    } catch (err) {
        return res.render('login', {
            title: 'login',
            user: req.session.user,
            error: 'invalid user'
        });
    }
});

app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, username, password, gender } = req.body;
    try {
        const existingUser = await pool.query(
            'SELECT * FROM users WHERE email = $1 OR username = $2',
            [email, username]
        );

        if (existingUser.rows.length > 0) {
            const errorMessage = existingUser.rows[0].email === email
                ? 'Email is already in use.'
                : 'Username is already taken.';

            return res.render('signup', { error: errorMessage, formData: req.body });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query(
            'INSERT INTO users (first_name, last_name, email, username, password, gender) VALUES ($1, $2, $3, $4, $5, $6)',
            [firstName, lastName, email, username, hashedPassword, gender]
        );

        res.redirect('/login');
    } catch (err) {
        console.error(err);
        res.status(500).render('signup', { error: 'An internal error occurred.', formData: req.body });
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
