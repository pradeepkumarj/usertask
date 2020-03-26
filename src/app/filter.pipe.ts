
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    /**
     * @param list   Array
     * @param args   String
     * @param data   Array
     * @param unique String
     * @output Filters the array with arguments
     */
    transform(list: any, args: string, data: any, unique: any): string {
        if (!args || !list || (list && !list.length)) {
            return list;
        }
        return _.uniqBy(list.filter((lock) => {
            return data.some((element) => {
                return (lock[element].toLowerCase().match(args.toLowerCase()));
            });
        }), unique)
    }
}


