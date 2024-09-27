import { Injectable } from '@nestjs/common';



@Injectable()
export class RentaService {
  private fechasDeclaracion = {
    '01': '12 de agosto del 2024',
    '02': '12 de agosto del 2024',
    '03': '13 de agosto del 2024',
    '04': '13 de agosto del 2024',
    '05': '14 de agosto del 2024',
    '06': '14 de agosto del 2024',
    '07': '15 de agosto del 2024',
    '08': '15 de agosto del 2024',
    '09': '16 de agosto del 2024',
    '10': '16 de agosto del 2024',
    '11': '20 de agosto del 2024',
    '12': '20 de agosto del 2024',
    '13': '21 de agosto del 2024',
    '14': '21 de agosto del 2024',
    '15': '22 de agosto del 2024',
    '16': '22 de agosto del 2024',
    '17': '23 de agosto del 2024',
    '18': '23 de agosto del 2024',
    '19': '26 de agosto del 2024',
    '20': '26 de agosto del 2024',
    '21': '27 de agosto del 2024',
    '22': '27 de agosto del 2024',
    '23': '28 de agosto del 2024',
    '24': '28 de agosto del 2024',
    '25': '29 de agosto del 2024',
    '26': '29 de agosto del 2024',
    '27': '2 de septiembre del 2024',
    '28': '2 de septiembre del 2024',
    '29': '3 de septiembre del 2024',
    '30': '3 de septiembre del 2024',
    '31': '4 de septiembre del 2024',
    '32': '4 de septiembre del 2024',
    '33': '5 de septiembre del 2024',
    '34': '5 de septiembre del 2024',
    '35': '6 de septiembre del 2024',
    '36': '6 de septiembre del 2024',
    '37': '9 de septiembre del 2024',
    '38': '9 de septiembre del 2024',
    '39': '10 de septiembre del 2024',
    '40': '10 de septiembre del 2024',
    '41': '11 de septiembre del 2024',
    '42': '11 de septiembre del 2024',
    '43': '12 de septiembre del 2024',
    '44': '12 de septiembre del 2024',
    '45': '13 de septiembre del 2024',
    '46': '13 de septiembre del 2024',
    '47': '16 de septiembre del 2024',
    '48': '16 de septiembre del 2024',
    '49': '17 de septiembre del 2024',
    '50': '17 de septiembre del 2024',
    '51': '18 de septiembre del 2024',
    '52': '18 de septiembre del 2024',
    '53': '19 de septiembre del 2024',
    '54': '19 de septiembre del 2024',
    '55': '20 de septiembre del 2024',
    '56': '20 de septiembre del 2024',
    '57': '23 de septiembre del 2024',
    '58': '23 de septiembre del 2024',
    '59': '24 de septiembre del 2024',
    '60': '24 de septiembre del 2024',
    '61': '25 de septiembre del 2024',
    '62': '25 de septiembre del 2024',
    '63': '26 de septiembre del 2024',
    '64': '26 de septiembre del 2024',
    '65': '27 de septiembre del 2024',
    '66': '27 de septiembre del 2024',
    '67': '1 de octubre del 2024',
    '68': '1 de octubre del 2024',
    '69': '2 de octubre del 2024',
    '70': '2 de octubre del 2024',
    '71': '3 de octubre del 2024',
    '72': '3 de octubre del 2024',
    '73': '4 de octubre del 2024',
    '74': '4 de octubre del 2024',
    '75': '7 de octubre del 2024',
    '76': '7 de octubre del 2024',
    '77': '8 de octubre del 2024',
    '78': '8 de octubre del 2024',
    '79': '9 de octubre del 2024',
    '80': '9 de octubre del 2024',
    '81': '10 de octubre del 2024',
    '82': '10 de octubre del 2024',
    '83': '11 de octubre del 2024',
    '84': '11 de octubre del 2024',
    '85': '15 de octubre del 2024',
    '86': '15 de octubre del 2024',
    '87': '16 de octubre del 2024',
    '88': '16 de octubre del 2024',
    '89': '17 de octubre del 2024',
    '90': '17 de octubre del 2024',
    '91': '18 de octubre del 2024',
    '92': '18 de octubre del 2024',
    '93': '21 de octubre del 2024',
    '94': '21 de octubre del 2024',
    '95': '22 de octubre del 2024',
    '96': '22 de octubre del 2024',
    '97': '23 de octubre del 2024',
    '98': '23 de octubre del 2024',
    '99': '24 de octubre del 2024',
    '00': '24 de octubre del 2024'
  };

    calcularDiaDeclaracion(id: string): string {
      const ultimosDosDigitos = this.obtenerUltimosDosDigitos(id);
      const fecha = this.fechasDeclaracion[ultimosDosDigitos];
      
      if (fecha) {
        return `La fecha límite para declarar es: ${fecha}`;
      } else {
        return 'Cédula inválida o fuera del rango de fechas.';
      }
    }
  
    // Método para obtener los últimos dos dígitos de la cédula
    private obtenerUltimosDosDigitos(id: string): string {
      return id.slice(-2);
    }
}
  

  

  

