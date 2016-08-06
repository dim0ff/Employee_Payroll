import {Pipe} from 'angular2/core';

@Pipe({
    name: "filter"
})
export class SearchPipe {
    transform(pipeData, [pipeModifier]) {
        return pipeData.filter((eachItem => {
            return eachItem['firstName'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
                eachItem['surname'].toLowerCase().includes(pipeModifier.toLowerCase());

        }));
    }
}