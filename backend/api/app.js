import express from 'express';
import { urlencoded, json } from 'body-parser';
import routes from './routes/index';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(cors({ credentials: true, origin: true }));
app.use(urlencoded({ extended: false }))
app.use(json());
app.use(cookieParser())
// app.use(session({

//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
// }));

var sess = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}

if (app.get('env') === 'DEVELOPMENT') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess));
app.use('/image', express.static('public/uploads'))
routes(app);
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is ready ${port}`)
})