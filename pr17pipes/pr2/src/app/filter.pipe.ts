import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false, // это по дефолту true - не позволяет обновление если к отфильтрованному массиву
  //  добавлем новый элемент (не вызывает изменения, если изменяем массив в момент просмотра отфильтрованного массива)
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === "") {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
