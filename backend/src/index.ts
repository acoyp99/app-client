import app from './app';
import {startConn} from './database';

async function main(){
    startConn();
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();