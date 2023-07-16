<<<<<<< HEAD
import{ NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
@NgModule({
    imports:[
CommonModule,
FormsModule,
ReactiveFormsModule,
RouterModule.forChild(userRoutes)
    ],
    declarations:[
ProfileComponent,
LoginComponent
    ],
    providers:[

    ]
})
=======
import{ NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
@NgModule({
    imports:[
CommonModule,
FormsModule,
ReactiveFormsModule,
RouterModule.forChild(userRoutes)
    ],
    declarations:[
ProfileComponent,
LoginComponent
    ],
    providers:[

    ]
})
>>>>>>> d17b4392b14f7af68992776a5d6520727993fe39
export class UserModule{}