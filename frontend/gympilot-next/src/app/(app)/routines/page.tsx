"use client";

import NameModal from "@/components/ExerciseDetails/Create/NameModal";
import List from "@/components/list/List";
import ListElement from "@/components/list/ListElementFunction";
import { createFromAPI } from "@/libs/data";
import { Template } from "@/libs/utils";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function routinesPage() {
    const router = useRouter();
    const pathname = usePathname();
    const [viewCreateModal, setViewCreateModal] = useState(false)
    const createTemplate = async (name:string) => {
        const template = await createFromAPI("/trainingTemplates", {name:name, exercises:[]})
        router.push("/routines/" + template["id"])
    }
    const handleSelection = (template:Template) => {
        router.push(pathname + "/" + template.id)
    }

    return (<div className="h-full w-full flex items-center p-5 relative">
        <NameModal setName={createTemplate} viewModal={viewCreateModal}></NameModal>
        <List<Template>
            tittle={"Routines"}
            tittleSize="text-4xl"
            searchBy="name"
            url={"/trainingTemplates"}
            render={ListElement}
            functionButtons={handleSelection}
            createFunction={()=>{setViewCreateModal(true)}}
        ></List>
    </div>);
}