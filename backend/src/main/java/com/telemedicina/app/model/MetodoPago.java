package com.telemedicina.app.model;



/**
 *
 * @author olive
 */


//Gettter y Setters
public class MetodoPago {
    
    private Long id_metodo_pago;
    private String tipo_pago;

    //Constructores de la clase metodo de pago
    public MetodoPago() {
    }

    public MetodoPago(Long id_metodo_pago, String tipo_pago) {
        this.id_metodo_pago = id_metodo_pago;
        this.tipo_pago = tipo_pago;
    }
    
    
}
