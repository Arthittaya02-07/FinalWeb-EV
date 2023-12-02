const express = require('express');
const router = express.Router();
const Partner = require('../models/partnerBranch'); // แก้ไข path ตามโครงสร้างโปรเจกต์ของคุณ

// เส้นทางสำหรับบันทึกข้อมูล Partner
module.exports = async (req, res) => {
    const {
        region,
        province,
        district,
        businessType,
        parkingType,
        parkingSpace
    } = req.body;
    const userId = req.session.userId;

    console.log('Received data:', {
        userId,
        region,
        province,
        district,
        businessType,
        parkingType,
        parkingSpace
    });

    try {
        console.log('AAAAA');
        // const partner = new Partner({
        //     userId: userId,
        //     zone: region, // หากมีการแปลง region, province, district เป็น zone และอื่นๆ ตามต้องการ
        //     province: province,
        //     typeBusiness: businessType,
        //     typeCarpark: parkingType,
        //     parkingSpaces: parkingSpace,
        // });

        Partner.create({
                userId: userId,
                zone: region, // หากมีการแปลง region, province, district เป็น zone และอื่นๆ ตามต้องการ
                province: province,
                typeBusiness: businessType,
                typeCarpark: parkingType,
                parkingSpaces: parkingSpace,
        }).then(() => {
            res.json({ success: true, message: 'บันทึกข้อมูลเรียบร้อย' });
        }).catch((error) => {
            return res.redirect('/Joinus')
        })
    } catch (error) {
        console.error('เกิดข้อผิดพลาด:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};
