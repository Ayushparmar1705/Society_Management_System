import React, { useEffect, useState } from 'react'
import ManageBlock from '../../../Api/MainAdmin/ManageBlock';
import ManageBlockPage from '../../../Pages/MainAdmin/BlockManagement/ManageBlockPage';
import { toast } from "react-toastify";
export default function Manageblockhook() {
    const [blockList, setBlockList] = useState([]);
    const [duplicateBlock, setduplicateBlock] = useState([]);
   
    const [isLoading, setIsLoading] = useState(true);
    const getBlocks = (async () => {
        try {

            const result = await ManageBlock.getBlock();
            setBlockList(result);

            setduplicateBlock(duplicateBlock);
        }
        catch (error) {
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    })
    useEffect(() => {
        getBlocks()

    }, []);


    const inActiveBlock = async (bid) => {
        try {
            const result = await ManageBlock.inActiveBlock(bid);
            console.log(result);
            if (result.code === 500) {
                toast.error(result.message);
                
            }
            else {
                ManageBlock.getBlock();
                toast.success(result.message);
            }

        } catch (err) {
            console.log(err);
        }
    }
    const ActiveBlock = async (bid) => {
        try {
            const result = await ManageBlock.ActiveBlock(bid);
            if (result.code === 500) {
                toast.error(result.message);

               
            }
            else {
                ManageBlock.getBlock();
                toast.success(result.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return <ManageBlockPage ActiveBlock={ActiveBlock} inActiveBlock={inActiveBlock} isLoading={isLoading} blockList={blockList} ></ManageBlockPage>
}
