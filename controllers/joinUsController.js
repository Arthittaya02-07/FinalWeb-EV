const express = require('express');
const router = express.Router();
const Partner = require('../models/partnerBranch');

module.exports = async (req, res) => {
    // const {
    //     region,
    //     province,
    //     district,
    //     businessType,
    //     parkingType,
    //     parkingSpace
    // } = req.body;
    // const userId = req.session.userId;
    
    // console.log('Received data:', {
    //     userId,
    //     region,
    //     province,
    //     district,
    //     businessType,
    //     parkingType,
    //     parkingSpace
    // });

    // try {
    //     const partner = new Partner({
    //         userId,
    //         zone: region, // หากมีการแปลง region, province, district เป็น zone และอื่นๆ ตามต้องการ
    //         province,
    //         typeBusiness: businessType,
    //         typeCarpark: parkingType,
    //         parkingSpaces: parkingSpace
    //     });

    //     await partner.save();
    //     res.json({ success: true, message: 'บันทึกข้อมูลเรียบร้อย' });
    // } catch (error) {
    //     console.error('เกิดข้อผิดพลาด:', error);
    //     res.status(500).json({ success: false, error: 'Internal Server Error' });
    // }
    res.render('Joinus')
};
