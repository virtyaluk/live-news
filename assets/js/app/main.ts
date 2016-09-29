import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from 'modules/app.module';

const platform = new platformBrowserDynamic();

platform.bootstrapModule(AppModule);