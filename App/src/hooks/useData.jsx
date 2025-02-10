import {mainContent} from "../context/DataProvider";
import { useContext } from "react";

export default function useData(){
    return useContext(mainContent);
}