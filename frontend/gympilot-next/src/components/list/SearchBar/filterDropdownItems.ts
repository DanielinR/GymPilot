import { getJsonFromAPI } from "@/libs/data"

export async function getFilterItems(filter:string){
    switch(filter){
        case "type":{
            var types:string[] = []
            const typesJson = await getJsonFromAPI("/exerciseTypes")
            for(var i = 0; i < typesJson.length; i++){
                types.push(typesJson[i]["name"])
            }
            return types
        }
        
        case "template":{
            var templates:string[] = []
            const templatesJson = await getJsonFromAPI("/trainingTemplates")
            for(var i = 0; i < templatesJson.length; i++){
                templates.push(templatesJson[i]["name"])
            }
            return templates
        }
        default:{return [""]}
    }
}