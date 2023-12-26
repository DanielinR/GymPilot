import { getJsonFromAPI } from "@/libs/data";

export async function getFilterItems(filter: string) {
  switch (filter) {
    case "type": {
      return await getJsonFromAPI("/exerciseTypes");
    }

    case "template": {
      return await getJsonFromAPI("/trainingTemplates");
    }
    default: {
      return [];
    }
  }
}
