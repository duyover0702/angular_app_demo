import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { FormsModule } from '@angular/forms';
import {CdkMenuModule} from '@angular/cdk/menu';
import { CardComponent } from './card/card.component';




@NgModule({
  declarations: [
    AppComponent,
    ClipboardComponent,
    CardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    ClipboardModule,
    FormsModule,
    CdkMenuModule
          
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
