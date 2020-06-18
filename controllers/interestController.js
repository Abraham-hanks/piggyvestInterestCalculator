module.exports = {
    simpleInterest: (req, res)=>{
        const principal = req.body.principal;
        const time = req.body.time;
        const rate = req.body.rate; 
        if (!principal || !time || !rate) {
            res.status(400).send({
                status: false,
                message: 'All fields required'
            })
        }
        parseFloat(principal);
        parseFloat(time);
        parseFloat(rate);
        if (typeof(time)!= "number" || typeof(rate)!= "number" || typeof(principal)!= "number" ) {
            return res.status(400).send({
                status: false,
                message: 'All fields must be a number'
            })
        }
        try {
            let interest = (principal * time * rate)/100;
            let amount = principal + interest;
            return res.status(200).send({
                status: true,
                result: {interest, amount}
            })
        } catch (error) {
            return res.status(500).send({
                status: false,
                result: error
            })
        }
    },

    piggyBankInterest: (req, res)=>{
        const principal = req.body.principal;
        const time = req.body.time; 
        if (!principal || !time) {
            res.status(400).send({
                status: false,
                message: 'All fields required'
            })
        }
        try {
            parseFloat(principal);
            parseFloat(time);
            let interest = (principal * time * 10)/100;
            let amount = principal + interest;
            return res.status(200).send({
                status: true,
                result: {interest, amount}
            })
        } catch (error) {
            return res.status(500).send({
                status: false,
                result: error
            })
        }
    },

    safeLockInterest: (req, res)=>{
        const principal = req.body.principal;
        const time = req.body.time; 
        if (!principal || !time) {
            res.status(400).send({
                status: false,
                message: 'All fields required'
            })
        }
        try { 
            parseFloat(principal);
            parseFloat(time);
            let interest = (principal * time * 15.5)/100;
            let amount = principal + interest;
            return res.status(200).send({
                status: true,
                result: {interest, amount}
            })
        } catch (error) {
            return res.status(500).send({
                status: false,
                result: error
            })
        }
    },

    targetInterest: (req, res)=>{
        const principal = req.body.principal;
        const time = req.body.time; 
        if (!principal || !time) {
            res.status(400).send({
                status: false,
                message: 'All fields required'
            })
        }
        try {
            parseFloat(principal);
            parseFloat(time);
            let interest = (principal * time * 10)/100;
            let amount = principal + interest;
            return res.status(200).send({
                status: true,
                result: {interest, amount}
            })
        } catch (error) {
            return res.status(500).send({
                status: false,
                result: error
            })
        }
    },

    flexInterest: (req, res)=>{
        const principal = req.body.principal;
        const time = req.body.time; 
        if (!principal || !time) {
            res.status(400).send({
                status: false,
                message: 'All fields required'
            })
        }
        try { 
            parseFloat(principal);
            parseFloat(time);
            let interest = (principal * time * 10)/100;
            let amount = principal + interest;
            return res.status(200).send({
                status: true,
                result: {interest, amount}
            })
        } catch (error) {
            return res.status(500).send({
                status: false,
                result: error
            })
        }
    },

    flexDollarInterest: (req, res)=>{
        const principal = req.body.principal;
        const time = req.body.time; 
        if (!principal || !time) {
            res.status(400).send({
                status: false,
                message: 'All fields required'
            })
        }
        try {
            parseFloat(principal);
            parseFloat(time);
            let interest = (principal * time * 6)/100;
            let amount = principal + interest;
            return res.status(200).send({
                status: true,
                result: {interest, amount}
            })
        } catch (error) {
            return res.status(500).send({
                status: false,
                result: error
            })
        }
    },

    investifyInterest: (req, res)=>{
        const principal = req.body.principal;
        const time = req.body.time; 
        if (!principal || !time) {
            res.status(400).send({
                status: false,
                message: 'All fields required'
            })
        }
        try {
            parseFloat(principal);
            parseFloat(time);
            let interest = (principal * time * 25)/100;
            let amount = principal + interest;
            return res.status(200).send({
                status: true,
                result: {interest, amount}
            })
        } catch (error) {
            return res.status(500).send({
                status: false,
                result: error
            })
        }
    }
}
