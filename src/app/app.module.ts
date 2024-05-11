import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    AngularFireModule.initializeApp({"projectId":"tattoo-2024","appId":"1:78813199360:web:bc7efdbfacee998f9cece5","storageBucket":"tattoo-2024.appspot.com","apiKey":"AIzaSyBq684hhJT5PzpgIwkRSPkbkQ3ligl6XoI","authDomain":"tattoo-2024.firebaseapp.com","messagingSenderId":"78813199360","measurementId":"G-PS2PGXHTBZ"}),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    //provideFirebaseApp(() => initializeApp({"projectId":"tattoo-2024","appId":"1:78813199360:web:bc7efdbfacee998f9cece5","storageBucket":"tattoo-2024.appspot.com","apiKey":"AIzaSyBq684hhJT5PzpgIwkRSPkbkQ3ligl6XoI","authDomain":"tattoo-2024.firebaseapp.com","messagingSenderId":"78813199360","measurementId":"G-PS2PGXHTBZ"}))
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
