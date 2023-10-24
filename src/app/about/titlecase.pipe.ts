import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titleCase'
})
export class titleCase implements PipeTransform{
    transform(value: string, args?: any[]) {
        value.toUpperCase;
        return value;
    }
}