import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';
import { Proveedor } from 'src/app/models/proveedor.model';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { UtilService } from 'src/app/services/util.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-proveedor',
  templateUrl: './agregar-proveedor.component.html',
  styleUrls: ['./agregar-proveedor.component.css']
})
export class AgregarProveedorComponent implements OnInit {


  lstPaises: Pais[] = [];
  objProveedor: Proveedor = {
    pais: {
      idPais: -1
    }
  };

  constructor(private utilService: UtilService, private proveedorService: ProveedorService) {

    this.utilService.listaPais().subscribe(
      x => this.lstPaises = x
    )

  }

  registra() {
    this.proveedorService.registraProveedor(this.objProveedor).subscribe(
      x => {
        Swal.fire({
          icon: 'success',
          title: 'Resultado del registro',
          text: x.errores
        })
      }
    )
  }

  ngOnInit(): void {
  }

}
