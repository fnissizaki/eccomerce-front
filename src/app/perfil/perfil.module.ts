import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { DadosComponent } from './cliente/dados/dados.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PedidosComponent } from './cliente/pedidos/pedidos.component';
import { CamposModule } from '../shared/components/campos/campos.module';

@NgModule({
  declarations: [ClienteComponent, AdministradorComponent, PedidosComponent, DadosComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    CamposModule
  ]
})
export class PerfilModule { }
