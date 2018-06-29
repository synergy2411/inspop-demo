import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'countrycode'
})
export class CountryCodePipe implements PipeTransform {
    transform(value : number, arg : any = '91', country : string) : string{
        if(country === 'IND'){
            console.log(country);
        }
        return "+" + arg +"- " + value;
    }
}