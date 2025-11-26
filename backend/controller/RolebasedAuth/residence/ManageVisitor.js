const ManageVisitor = require("../../../model/RolebasedAuth/residence/ManageVisitorModal")

const Managevisitorconytroller = {
    manageVisitor : (req,res)=>{
        const flat_id = req.params.fid;
        
        ManageVisitor.getVisitorsByFlatId(flat_id,(err,result)=>{
            if(err){
                return res.status(500).send({code:500,message:err});
            }else{
                return res.status(200).send({code:200,message:result});
            }
        })
    },
    approve:(req,res)=>{
        const vid = req.params.uid;
        ManageVisitor.approveVisitor(vid,(err,_)=>{
            if(err){
                return res.status(500).send({code:500,message:err});
            }else{
                return res.status(200).send({code:200,message:"Member approve succesfully"});
            }
        })

    }
}

module.exports = {Managevisitorconytroller}