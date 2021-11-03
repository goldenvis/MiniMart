import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';


// Routes
import indexRoutes from './routes/index.routes';
import postRoutes from './routes/post.routes';
import vendorRoutes  from './routes/vendor.routes';
import vendorUsersRoutes from './routes/vendorregister.routes';
import vendorUsersLoginRoutes from './routes/vendorlogin.routes';

export class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        //this.app.use(cors);
        this.app.use(cors({
            origin: 'http://localhost:3000'}));
        // this.app.use(express.urlencoded({extended:false}));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(indexRoutes);
        this.app.use('/posts', postRoutes);
        this.app.use('/vendoritems',vendorRoutes);
        this.app.use('/user/register',vendorUsersRoutes);
        this.app.use('/user/login',vendorUsersLoginRoutes);
    }

    
    async listen() {
        await this.app.listen( this.app.get('port'));
        console.log( `server started at http://localhost:${ this.app.get('port') }` );
    }
    
}