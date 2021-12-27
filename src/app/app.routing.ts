//Importar modulos 
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

//Importar componentes
import { LoginComponent } from "./login/login.component";
import { MisVuelosComponent } from "./mis-vuelos/mis-vuelos.component";
import { AdquirirVuelosComponent } from "./adquirir-vuelos/adquirir-vuelos.component";

//Rutas 
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'mis-vuelos', component: MisVuelosComponent },
    { path: 'vuelos', component: AdquirirVuelosComponent },
];

// Exportar Modulos
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

//Cargar el fichero en app.module