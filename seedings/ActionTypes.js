const ActionTypes=require("../models/ActionTypes")

ActionTypes.create([{
    actionTypeName: 'Lead Created',
    typeCode: "LC"
},
{
    actionTypeName: 'Lead Updated',
    typeCode: "LU"
}, {
    actionTypeName: 'Sent Email',
    typeCode: "ES"
}, {
    actionTypeName: 'Counselling Session Created',
    typeCode: "CC"
},
{
    actionTypeName: 'Follow Up Created',
    typeCode: "FC"
},
{
    actionTypeName: 'Counselling Session Started',
    typeCode: "CS"
}, {
    actionTypeName: 'Counselling Session Ended',
    typeCode: "CE"
}, {
    actionTypeName: 'Application Created',
    typeCode: "AC"
}, {
    actionTypeName: 'Application Updated',
    typeCode: "AU"
}, {
    actionTypeName: 'Application Deleted',
    typeCode: "AD"
}, {
    actionTypeName: 'User Logged In',
    typeCode: "LI"
}, {
    actionTypeName: 'User Logged Out',
    typeCode: "LO"
}, {
    actionTypeName: 'Application Handler Updated',
    typeCode: "HU"
},
{
    actionTypeName: 'Transaction Created',
    typeCode: "TC"
},
{
    actionTypeName: 'Lead To Prospect',
    typeCode: "L2P"
},
{
    actionTypeName: 'Prospect to Student',
    typeCode: "P2S"
},
{
    actionTypeName: 'Updated Lead Owner',
    typeCode: "ULO"
},
{
    actionTypeName: 'User Auto Logged Out',
    typeCode: "ALO"
},
{
    actionTypeName: 'Visa Application Initiated',
    typeCode: "VAI"
},
{
    actionTypeName: 'Visa Application Status Changed',
    typeCode: "VASC"
},
{
    actionTypeName: 'Visa Application Handler Updated',
    typeCode: "VAHU"
},
{
    actionTypeName: 'Process Communication Message Sent',
    typeCode: "PCMS"
},
{
    actionTypeName: 'Lead Transfered to another branch',
    typeCode: "LTB"
},
{
    actionTypeName: 'Lead Exam Registeration Action',
    typeCode: "LER"
},
{
    actionTypeName: 'Meeting Created',
    typeCode: "MC"
},
{
    actionTypeName: 'Recommendation Action',
    typeCode: "LRA"
},
{
    actionTypeName: 'Transactional Email Sent Action',
    typeCode: "TES"
},
{
    actionTypeName: 'Counselling Session Updated',
    typeCode: "CSU"
},
{
    actionTypeName: 'Lead Entity Verification',
    typeCode: "LEV"
},
{
    actionTypeName: 'Schedule Updated Action',
    typeCode: "SUA"
},
{
    actionTypeName: 'Event Changed Action',
    typeCode: "ECA"
},
{
    actionTypeName: 'Lead Remark Created Action',
    typeCode: "LRC"
},
{
    actionTypeName: 'User Changed Action',
    typeCode: 'UC'
}, 
{
    actionTypeName: 'Approval Action', 
    typeCode: 'APRV'
},
{
    actionTypeName: 'Coach Assigned Action', 
    typeCode: 'CAA'
},
{
    actionTypeName: 'Counselling Thank You Email and SMS sent', 
    typeCode: 'CTY'
},


])
.then(user => {
    console.log(`${user.length} users created`);
})
.catch((err) => {
    console.log(err);
})