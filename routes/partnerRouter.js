var router = require('express').Router();
var Partner = require('./../models/Partner');
const {success, error} = require('./../utils/functions');

router.route('/')

    .get((req, res) => {
        Partner.find((err, partners) => {
            if (err) {
                res.json(error(err));
            }
            res.json(success(partners));
        })
    })

    .post( async (req,res) => {
        let same = false;

        await Partner.findOne({ name: formatString(req.body.name) }, (err, partner) => {
            if (partner) {
                same = true;
            }
        });
        console.log(same);

        if (same) {
            return res.json(error("This name is already taken"))
        }

        let partner = new Partner();
        partner.name = formatString(req.body.name);
        partner.job = req.body.job.toUpperCase();
        partner.location = formatString(req.body.location);
        partner.ifIWas = formatString(req.body.ifIWas);
        partner.image = req.body.image;

        partner.save((err) => {
            if(err){
                res.json(err);
            }
            res.json(success(partner));
        });
    });

router.route('/:id')

    .get((req, res) => {
        Partner.findOne({ _id: req.params.id }, (err, partner) => {
            try {
                if (partner) {
                    res.json(success(partner));
                }
            } catch (err) {
                res.json(error(err));
            }
        })
    });

function formatString(string)
{
    if (typeof string == "string") {
        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase() ;
    }
}

module.exports = router;