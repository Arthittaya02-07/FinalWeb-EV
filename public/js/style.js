// sign Up

var animateButton = function (e) {
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
    //   ใส่ไปหน้าที่ต้องการเติมตรง AAA
    console.log('AAA');
  }, 1500);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("mouseenter", animateButton, false);
  bubblyButtons[i].addEventListener("mouseleave", function (e) {
    // เพื่อให้ animation หยุดเมื่อ mouse ออก
    e.target.classList.remove("animate");
  }, false);
}

  

// picture change
function openFileExplorer() {
  // เรียกฟังก์ชัน click บน input element เมื่อคลิกที่ปุ่ม Upload
  document.getElementById('upload-profile').click();
}

function changeProfileImage(event) {
  const input = event.target;
  if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
          document.getElementById('profile-image').src = e.target.result;
      };

      reader.readAsDataURL(input.files[0]);
  }
}

// Join Us เลือกสถานที่
// กำหนดข้อมูลจังหวัดตามภาค
const provincesByRegion = {
  "ภาคเหนือ": ["เชียงราย", "น่าน","พะเยา","เชียงใหม่","แม่ฮ่องสอน","แพร่","ลำปาง","ลำพูน","อุตรดิตถ์"],
  "ภาคตะวันออกเฉียงเหนือ": ["หนองคาย","นครพนม","สกลนคร","อุดรธานี","หนองบัวลำภู","เลย","มุกดาหาร","กาฬสินธุ์","ขอนแก่น","อำนาจเจริญ","ยโสธร","ร้อยเอ็ด","มหาสารคาม","ชัยภูมิ","นครราชสีมา","บุรีรัมย์","สุรินทร์","ศรีสะเกษ","อุบลราชธานี"],
  "ภาคกลาง": ["กรุงเทพมหานคร","พิษณุโลก","สุโขทัย","เพชรบูรณ์","พิจิตร","กำแพงเพชร","นครสวรรค์","ลพบุรี","ชัยนาท","อุทัยธานี","สิงห์บุรี","อ่างทอง","สระบุรี","พระนครศรีอยุธยา","สุพรรณบุรี","นครนายก","ปทุมธานี","นนทบุรี","นครปฐม","สมุทรปราการ","สมุทรสาคร","สมุทรสงคราม"],
  "ภาคตะวันออก": ["สระแก้ว", "ปราจีนบุรี", "ฉะเชิงเทรา", "ชลบุรี", "ระยอง", "จันทบุรี", "ตราด"],
  "ภาคตะวันตก": ["ตาก", "กาญจนบุรี", "ราชบุรี", "เพชรบุรี", "ประจวบคีรีขันธ์"],
  "ภาคใต้": ["ชุมพร","ระนอง","สุราษฎร์ธานี","นครศรีธรรมราช","กระบี่","พังงา","ภูเก็ต","พัทลุง","ตรัง","ปัตตานี","สงขลา","สตูล","นราธิวาส","ยะลา"]
};

 // ฟังก์ชันเลือกเขต/อำเภอตามจังหวัด
 const districtsByProvince = {
  // ภาคเหนือ
  "เชียงราย": ["เมืองเชียงราย", "เชียงของ", "แม่จัน", "เชียงคำ", "เวียงป่าเป้า", "แม่สาย", "แม่สรวย", "เทิง", "พาน", "ขุนตาล", "พญาเม็งราย", "เวียงเชียงรุ้ง", "เชียงแสน"],
  "น่าน": ["เมืองน่าน", "นาน้อย", "เวียงสา", "ทุ่งช้าง", "ปัว", "แม่จริม", "ท่าวังผา", "บ่อเกลือ", "สันติสุข", "เฉลิมพระเกียรติ", "แม่เสร้า"],
  "พะเยา": ["เมืองพะเยา", "เชียงคำ", "จุน", "ดอกคำใต้", "ปง", "ภูซาง", "แม่ใจ", "เชียงม่วน", "ภูกามยาว"],
  "เชียงใหม่": ["เมืองเชียงใหม่", "ดอยสะเก็ด", "ดอยเต่า", "แม่ริม", "สะเมิง", "สันกำแพง", "สันทราย", "แม่แตง", "ดอยหล่อ", "แม่ออน", "สันป่าตอง", "หางดง", "สารภี", "แม่วาง", "ดอยสะเก็ด", "แม่แจ่ม", "จอมทอง", "เชียงดาว", "ฝาง", "แม่อาย", "อมก๋อย", "ฮอด", "สันติสุข", "ดอยเต่า", "แม่สะเรียง"],
  "แม่ฮ่องสอน": ["เมืองแม่ฮ่องสอน", "ปางมะผ้า", "แม่สะเรียง", "สบเมย", "ขุนยวม", "ปาย", "แม่ลาน้อย", "แม่วาง"],
  "แพร่": ["เมืองแพร่", "ร้องกวาง", "เด่นชัย", "ลอง", "วังชิ้น", "หนองม่วงไข่", "สอง", "สูงเม่น"],
  "ลำปาง": ["เมืองลำปาง", "แม่เมาะ", "แจ้ห่ม", "งาว", "วังเหนือ", "เกาะคา", "แม่ทะ", "เมืองปาน", "ห้างฉัตร", "เถิน", "สบปราบ", "เสริมงาม"],
  "ลำพูน": ["เมืองลำพูน", "แม่ทา", "ลี้", "บ้านโฮ่ง", "ทุ่งหัวช้าง", "ป่าซาง", "แม่ออน", "กัลยาณิวัฒนา"],
  "อุตรดิตถ์": ["เมืองอุตรดิตถ์", "น้ำปาด", "บ้านโคก", "พิชัย", "ฟากท่า", "ลับแล", "ทุ่งเสลี่ยม", "ตรอน", "วังทอง"],

  // ภาคตะวันออกเฉียงเหนือ
  "หนองคาย": ["เมืองหนองคาย", "โพนพิสัย", "บึงกาฬ", "ท่าบ่อ", "สังคม", "ศรีเชียงใหม่", "สระใคร", "รัตนวาปี", "กุมภวาปี"],
  "นครพนม": ["เมืองนครพนม", "ธาตุพนม", "ท่าอุเทน", "นาหว้า", "ปลาปาก", "กุฉินารายณ์", "ศรีสงคราม", "นาทม"],
  "สกลนคร": ["เมืองสกลนคร", "โคกศรีสุพรรณ", "พรรณานิคม", "อากาศอำนวย", "วานรนิวาส", "วาริชภูมิ", "นิคมน้ำอูน", "บ้านม่วง", "ภูพาน"],
  "อุดรธานี": ["เมืองอุดรธานี", "กุมภวาปี", "หนองหาน", "หนองวัวซอ", "บ้านดุง", "หนองบัวลำภู", "โนนสะอาด", "ประจักษ์ศิลปาคม", "เพ็ญ"],
  "หนองบัวลำภู": ["เมืองหนองบัวลำภู", "ศรีบุญเรือง", "โนนสัง", "สุวรรณคูหา", "นาวัง", "ภูเรือ", "ศรีสมเด็จ"],
  "เลย": ["เมืองเลย", "เชียงคาน", "ภูเรือ", "ปากชม", "ด่านซ้าย", "นาแห้ว", "ภูหลวง", "วังสะพุง", "เชียงม่วน"],
  "มุกดาหาร": ["เมืองมุกดาหาร", "นิคมคำสร้อย", "หนองสูง", "คำชะอี", "ดงหลวง", "ดอนตาล", "กุฉินารายณ์", "ศรีสงคราม"],
  "กาฬสินธุ์": ["เมืองกาฬสินธุ์", "กมลาไสย", "ยางตลาด", "นามน", "ท่าคันโท", "ร่องคำ", "กุฉินารายณ์", "สามชัย", "หนองกุงศรี"],
  "ขอนแก่น": ["เมืองขอนแก่น", "ภูเวียง", "ชุมแพ", "หนองเรือ", "น้ำพอง", "อุบลรัตน์", "บ้านไผ่", "ภูผาม่าน", "ชนบท", "หนองสองห้อง", "เปือยน้อย"],
  "อำนาจเจริญ": ["เมืองอำนาจเจริญ", "หัวตะพาน", "เขมราฐ", "ชานุมาน", "ปทุมราชวงศา", "อำนาจเจริญ", "ลืออำนาจ", "พิบูลมังสาหาร"],
  "ยโสธร": ["เมืองยโสธร", "ทรายมูล", "ไทยเจริญ", "ป่าติ้ว", "มหาชนะชัย", "ยโสธร", "น้ำพอง", "บ้านด่าน"],
  "ร้อยเอ็ด": ["เมืองร้อยเอ็ด", "โพธิ์ชัย", "เกษตรวิสัย", "สุวรรณภูมิ", "เมืองสรวง", "จังหาร", "หนองพอย", "โพนทราย", "ศรีสมเด็จ", "กมลาไสย"],
  "มหาสารคาม": ["เมืองมหาสารคาม", "แกดำ", "กันทรวิชัย", "โกสุมพิสัย", "บรบือ", "วาปีปทุม", "นาดูน", "พยัคฆภูมิพิสัย", "เชียงยืน", "ชื่นชม"],
  "ชัยภูมิ": ["เมืองชัยภูมิ", "คอนสวรรค์", "แก้งคร้อ", "ภูเขียว", "ภูเวียง", "จัตุรัส", "บำเหน็จณรงค์", "เนินสง่า", "บ้านแท่น", "ภูผาม่าน"],
  "นครราชสีมา": ["เมืองนครราชสีมา", "ปากช่อง", "โชคชัย", "ครบุรี", "วังน้ำเขียว", "โนนสูง", "เมืองยาง", "พิมาย", "ด่านขุนทด", "สูงเนิน", "ขามทะเลสอ", "เฉลิมพระเกียรติ", "บัวใหญ่", "ประทาย", "โนนไทย", "คง", "บัวลาย", "เทพารักษ์", "โนนสูง", "ชุมพวง"],
  "บุรีรัมย์": ["บ้านกรวด","คูเมือง","ละหานทราย","หนองกี่","ปะคำ","นาโพธิ์","หนองหงส์","พลับพลาชัย","ห้วยราช","โนนสุวรรณ","เฉลิมพระเกียรติจังหวัด"],
  "สุรินทร์": ["กระสัง", "รัตนบุรี", "ศีขรภูมิ", "ปราสาท", "สังขะ", "กาบเชิง", "บัวเชด", "ศรีณรงค์", "โนนนารายณ์", "นาเยีย"],
  "ศรีสะเกษ": ["ยางชุมน้อย", "ขุนหาญ", "บึงบูรพ์", "ราษีไศล", "อุทุมพรพิสัย", "ขุขันธ์", "ศรีรัตนะ", "กันทรารมย์", "ศรีสะเกษ", "กันทรารมย์"],
  "อุบลราชธานี": ["เขื่องใน", "พิบูลมังสาหาร", "วารินชำราบ", "ตระการพืชผล", "เดชอุดม", "สิรินธร", "น้ำยืน", "บุณฑริก", "นาตาล", "ศรีเมืองใหม่"],

  // ภาคกลาง
  "กรุงเทพมหานคร": ["บางกอกใหญ่", "บางกอกน้อย", "คลองสาน", "ตลิ่งชัน", "บางขุนเทียน", "ภาษีเจริญ", "หนองแขม", "ราษฎร์บูรณะ", "บางพลัด", "ธนบุรี", "บางแค", "ทวีวัฒนา", "หนองจอก", "ดอนเมือง", "มีนบุรี", "คันนายาว", "คลองสามวา", "บางเขน", "หลักสี่", "จตุจักร", "ลาดพร้าว", "วังทองหลาง", "บางกะปิ", "สวนหลวง", "ประเวศ", "บางนา", "ลาดกระบัง", "สะพานสูง", "สะพานใหม่", "ดอนเมือง", "สายไหม", "ออเงิน", "ลำลูกกา", "ธัญบุรี", "คลองหลวง", "หนองเสือ", "สามโคก"],
  "พิษณุโลก": ["เมืองพิษณุโลก", "บางกระทุ่ม", "พรหมพิราม", "วังทอง", "บางระกำ", "วัดโบสถ์", "นครไทย", "บางกระทุ่ม", "ชาติตระการ", "เนินมะปราง"],
  "สุโขทัย": ["เมืองสุโขทัย", "ศรีสัชนาลัย", "สวรรคโลก", "กงไกรลาศ", "ศรีสำโรง", "บ้านด่านลานหอย", "ทุ่งเสลี่ยม", "คีรีมาศ", "ศรีนคร", "สวรรคบุรี"],
  "เพชรบูรณ์": ["เมืองเพชรบูรณ์", "ชนแดน", "วิเชียรบุรี", "หล่มสัก", "หล่มเก่า", "ศรีเทพ", "หนองไผ่", "บึงสามพัน", "น้ำหนาว", "เขาค้อ"],
  "พิจิตร": ["เมืองพิจิตร", "ตะพานหิน", "สามง่าม", "บางมูลนาก", "โพธิ์ประทับช้าง", "ทับคล้อ", "โพทะเล", "กงไกรลาศ", "สากเหล็ก", "วชิรบารมี"],
  "กำแพงเพชร": ["เมืองกำแพงเพชร", "คลองลาน", "ขาณุวรลักษบุรี", "ปางศิลาทอง", "นครไทย", "ลานกระบือ", "ทรายทองวัฒนา", "โกสัมพีนคร", "พรานกระต่าย"],
  "นครสวรรค์": ["เมืองนครสวรรค์", "ตาคลี", "ไพศาลี", "ตากฟ้า", "พยุหะคีรี", "ชุมแสง", "ลาดยาว", "โกรกพระ", "แม่วงก์", "ลาดยาว"],
  "ลพบุรี": ["เมืองลพบุรี", "บ้านหมี่", "ชัยบาดาล", "พัฒนานิคม", "ท่าหลวง", "โคกเจริญ", "โคกสำโรง", "หนองม่วง", "สระแก้ว", "ลำสนธิ"],
  "ชัยนาท": ["เมืองชัยนาท", "สรรพยา", "สรรคบุรี", "วัดสิงห์", "หันคา", "มโนรมย์", "เนินขาม", "สรรพยา", "หนองมะค่าโมง"],
  "อุทัยธานี": ["เมืองอุทัยธานี", "หนองฉาง", "ทัพทัน", "สว่างอารมณ์", "หนองขาหย่าง", "บ้านไร่", "ลานสัก", "อุทัยธานี", "วัดสิงห์"],
  "สิงห์บุรี": ["เมืองสิงห์บุรี", "ค่ายบางระจัน", "พรหมบุรี", "ท่าช้าง", "อินทร์บุรี", "บางระจัน", "ไม้แก่น", "บางซ้าย", "สรรพยา"],
  "อ่างทอง": ["เมืองอ่างทอง", "ไชโย", "โพธิ์ทอง", "สามโก้", "วิเศษชัยชาญ", "ป่าโมก", "แสวงหา", "สามชุก", "เมืองไชย", "บ้านนา"],
  "สระบุรี": ["เมืองสระบุรี", "แก่งคอย", "หนองแค", "หนองโดน", "หนองแซง", "พระพุทธบาท", "วิหารแดง", "มวกเหล็ก", "เฉลิมพระเกียรติ", "บ้านหมอ"],
  "พระนครศรีอยุธยา": ["เมืองพระนครศรีอยุธยา", "บางปะอิน", "บางไทร", "ผักไห่", "ภาชี", "วังน้อย", "บางปะหัน", "นครหลวง", "ท่าเรือ", "พระนครศรีอยุธยา"],
  "สุพรรณบุรี": ["เมืองสุพรรณบุรี", "สองพี่น้อง", "อู่ทอง", "ศรีประจันต์", "หนองหญ้าไซ", "ด่านช้าง", "สามชุก", "ท่าช้าง", "เดิมบางนางบวช", "ดอนเจดีย์"],
  "นครนายก": ["เมืองนครนายก", "ปากพลี", "องครักษ์", "บ้านนา", "มวกเหล็ก", "หินกอง", "เมืองใหม่", "นาดี", "ศรีนาวา", "ลำลูกกา"],
  "ปทุมธานี": ["เมืองปทุมธานี", "ธัญบุรี", "คลองหลวง", "สามโคก", "หนองเสือ", "ลาดหลุมแก้ว", "ลำลูกกา", "คลองหลวง", "หนองบัว", "สามโคก"],
  "นนทบุรี": ["เมืองนนทบุรี", "ปากเกร็ด", "บางกรวย", "บางใหญ่", "ไทรน้อย", "เมืองปทุมธานี", "บางบัวทอง", "บางกรวย", "บางใหญ่", "ไทรน้อย"],
  "นครปฐม": ["เมืองนครปฐม", "สามพราน", "นครชัยศรี", "พุทธมณฑล", "สามพราน", "นครชัยศรี", "พุทธมณฑล", "กำแพงแสน", "ดอนตูม", "สามชุก"],
  "สมุทรปราการ": ["เมืองสมุทรปราการ", "พระประแดง", "บางบ่อ", "บางพลี", "บางเสาธง", "พระสมุทรเจดีย์", "พระประแดง", "บางบ่อ", "บางพลี", "บางเสาธง"],
  "สมุทรสาคร": ["เมืองสมุทรสาคร", "กระทุ่มแบน", "เมืองสมุทรสาคร", "กระทุ่มแบน", "บ้านแพ้ว", "เมืองสมุทรสาคร", "กระทุ่มแบน", "บ้านแพ้ว"],
  "สมุทรสงคราม": ["เมืองสมุทรสงคราม", "อัมพวา", "บางคนที", "ท่าฉลอม", "บางคนที", "ท่าฉลอม"],

  //ภาคตะวันออก
  "สระแก้ว": ["เมืองสระแก้ว", "คลองหาด", "วังน้ำเย็น", "อรัญประเทศ", "ตาพระยา", "วัฒนานคร", "เขาฉกรรจ์", "วังสมบูรณ์", "โคกสูง"],
  "ปราจีนบุรี": ["เมืองปราจีนบุรี", "กบินทร์บุรี", "ศรีมโหสถ", "บ้านสร้าง", "ประจันตคาม", "นาดี", "ศรีมหาโพธิ", "กบินทร์บุรี", "ศรีนครินทร์"],
  "ฉะเชิงเทรา": ["เมืองฉะเชิงเทรา", "บางปะกง", "พนมสารคาม", "บ้านโพธิ์", "ราชสาส์น", "บางคล้า", "สนามชัยเขต", "คลองเขื่อน", "บ้านสร้าง"],
  "ชลบุรี": ["เมืองชลบุรี", "ศรีราชา", "พัทยา", "พานทอง", "เกาะสีชัง", "บ่อทอง", "หนองใหญ่", "บ้านบึง", "พานทอง"],
  "ระยอง": ["เมืองระยอง", "แกลง", "บ้านค่าย", "วังจันทร์", "ปลวกแดง", "บ้านฉาง", "นิคมพัฒนา", "เขาชะเมา", "นิคมพัฒนา"],
  "จันทบุรี": ["เมืองจันทบุรี", "ท่าใหม่", "โป่งน้ำร้อน", "มะขาม", "นายายอาม", "แก่งหางแมว", "ขลุง", "สอยดาว"],
  "ตราด": ["เมืองตราด", "คลองใหญ่", "แหลมงอบ", "บ่อไร่", "เกาะช้าง", "เกาะกูด", "เกาะหมาก", "เกาะช้าง", "แหลมงอบ"],

  //ภาคตะวันตก
  "ตาก": ["เมืองตาก", "แม่สอด", "แม่ระมาด", "แม่พริก", "พบพระ", "อุ้มผาง", "วังเจ้า", "สามเงา", "บ้านตาก"],
  "กาญจนบุรี": ["เมืองกาญจนบุรี", "ท่ามะกา", "ไทรโยค", "ศรีสวัสดิ์", "ทองผาภูมิ", "สังขละบุรี", "ด่านมะขามเตี้ย", "บ่อพลอย", "ท่าม่วง"],
  "ราชบุรี": ["เมืองราชบุรี", "ดำเนินสะดวก", "บ้านโป่ง", "โพธาราม", "จอมบึง", "สวนผึ้ง", "ปากท่อ", "วัดเพลง", "บ้านคา"],
  "เพชรบุรี": ["เมืองเพชรบุรี", "แก่งกระจาน", "ชะอำ", "บ้านลาด", "หนองหญ้าปล้อง", "บ้านแหลม", "เขาย้อย", "ท่ายาง", "ชะอำ"],
  "ประจวบคีรีขันธ์": ["เมืองประจวบคีรีขันธ์", "หัวหิน", "สามร้อยยอด", "ปราณบุรี", "กุยบุรี", "ทับสะแก", "บางสะพาน", "บางสะพานน้อย"],

  //ภาคใต้
  "ชุมพร": ["เมืองชุมพร", "ปะทิว", "หลังสวน", "ละแม", "พะโต๊ะ", "ท่าแซะ", "ละมุด", "สวี", "ทุ่งตะโก"],
  "ระนอง": ["เมืองระนอง", "กะเปอร์", "สุขสำราญ", "ละอุ่น", "กะทูน", "พะโต๊ะ", "สวี", "เกาะพยาม", "เกาะสมุย"],
  "สุราษฎร์ธานี": ["เมืองสุราษฎร์ธานี", "เกาะสมุย", "เกาะพะงัน", "คีรีรัฐนิคม", "เวียงสระ", "พุนพิน", "ไชยา", "ท่าฉาง", "เคียนซา"],
  "นครศรีธรรมราช": ["เมืองนครศรีธรรมราช", "พระพรหม", "สิชล", "ขนอม", "ทุ่งสง", "ร่อนพิบูลย์", "เชียรใหญ่", "ชะอวด", "จุฬาภรณ์"],
  "กระบี่": ["เมืองกระบี่", "อ่าวลึก", "คลองท่อม", "เขาพนม", "เกาะลันตา", "เกาะพีพี", "ลำทับ", "เกาะยาว", "คลองใหญ่"],
  "พังงา": ["เมืองพังงา", "กะปง", "ตะกั่วป่า", "เกาะยาวน้อย", "เกาะยาวใหญ่", "คุระบุรี", "ทับปุด", "อ่าวลึก", "ตะกั่วทุ่ง"],
  "ภูเก็ต": ["เมืองภูเก็ต", "ถลาง", "กะทู้", "กะปง", "ถ้ำน้ำผุด", "เกาะสมุย", "เกาะพะงัน", "เกาะลันตา", "เกาะพีพี"],
  "พัทลุง": ["เมืองพัทลุง", "ควนขนุน", "ตะโหมด", "กงหรา", "เขาชัยสน", "ศรีนครินทร์", "ปากพนัง", "ป่าพะยอม", "ศรีบรรพต"],
  "ตรัง": ["เมืองตรัง", "กันตัง", "หาดสำราญ", "สิเกา", "วังวิเศษ", "นาโยง", "ห้วยยอด", "นาบอน", "ปะเหลียน"],
  "ปัตตานี": ["เมืองปัตตานี", "ยะหริ่ง", "มายอ", "สายบุรี", "หนองจิก", "กะพ้อ", "ปะนาเระ", "โคกโพธิ์", "ไม้แก่น"],
  "สงขลา": ["เมืองสงขลา", "หาดใหญ่", "ควนเนียง", "สะเดา", "ระโนด", "นาทวี", "เทพา", "จะนะ", "นาหม่อม"],
  "สตูล": ["เมืองสตูล", "ละงู", "มะนัง", "ทุ่งหว้า", "ควนโดน", "ท่าแพ", "กันตัง", "ฉลุง", "เกาะอาดัง"],
  "นราธิวาส": ["เมืองนราธิวาส", "ตากใบ", "ระแงะ", "สุคิริน", "รือเสาะ", "ยี่งอ", "แว้ง", "ศรีสาคร", "บาเจาะ"],
  "ยะลา": ["เมืองยะลา", "เบตง", "รามัน", "บันนังสตา", "กาบัง", "ธารโต", "ยะหา", "บันนังสตา", "รามัน"],
};
// ฟังก์ชันเลือกจังหวัดตามภาค
function selectProvince(region) {
  // เลือกจังหวัดตามภาคที่เลือก
  const provinces = provincesByRegion[region];

  // ล้างตัวเลือกจังหวัด
  document.getElementById("province").options.length = 0;

  // เพิ่มตัวเลือกจังหวัด
  provinces.forEach((province) => {
    const option = document.createElement("option");
    option.value = province;
    option.text = province;
    document.getElementById("province").appendChild(option);
  });

  // ตรวจสอบว่ามีจังหวัดให้เลือกหรือไม่
  if (provinces.length > 0) {
    // เรียกใช้ฟังก์ชันเลือกเขต/อำเภอ
    selectDistrict(document.getElementById("province").value);
  }
}

// ฟังก์ชันเลือกเขต/อำเภอตามจังหวัด
function selectDistrict(province) {
  // ตรวจสอบว่ามีเขต/อำเภอหรือไม่
  if (districtsByProvince[province].length > 0) {
    // เพิ่มตัวเลือกเขต/อำเภอ
    const districts = districtsByProvince[province];
    // ล้างตัวเลือกเขต/อำเภอ
    document.getElementById("district").options.length = 0;
    districts.forEach((district) => {
      const option = document.createElement("option");
      option.value = district;
      option.text = district;
      document.getElementById("district").appendChild(option);
    });
  } else {
    // แสดงข้อความแจ้งว่าไม่มีเขต/อำเภอ
    document.getElementById("district").innerHTML = "ไม่มีเขต/อำเภอ";
  }
}


// เรียกใช้ฟังก์ชันเมื่อเลือกภาค
document.getElementById("region").addEventListener("change", () => {
  selectProvince(document.getElementById("region").value);
});

// เรียกใช้ฟังก์ชันเมื่อเลือกภาค
document.getElementById("province").addEventListener("change", () => {
  selectDistrict(document.getElementById("province").value);
});


document.addEventListener("DOMContentLoaded", function () {
  var goToTopButtons = document.querySelectorAll(".go-to-top a");

  // Show/hide the "Go to Top" button based on scroll position
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      goToTopButtons.forEach(function (button) {
        button.style.display = "block";
      });
    } else {
      goToTopButtons.forEach(function (button) {
        button.style.display = "none";
      });
    }
  };

  // Smooth scrolling to the top
  goToTopButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      // Scroll to the top with smooth behavior
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
});


// contact to footer

$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });
});


// booking
function showSummary() {
  // ตรวจสอบความครบถ้วนของข้อมูล
  if (validateBookingData()) {
    // ดึง Element ของ Card สรุปการจอง
    var summaryCard = document.getElementById('summaryCard');
  
    // ตั้งค่า style.display เป็น 'block' เพื่อให้แสดง
    summaryCard.style.display = 'block';
  
    // อัปเดตข้อมูลใน Card
    updateSummary();
  } else {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
  }
}

function validateBookingData() {
  // ตรวจสอบความครบถ้วนของข้อมูล
  var region = document.getElementById('region').value;
  var province = document.getElementById('province').value;
  var district = document.getElementById('district').value;
  var bookingDate = document.getElementById('bookingDate').value;
  var bookingTime = document.getElementById('bookingTime').value;

  return region !== '' && province !== '' && district !== '' && bookingDate !== '' && bookingTime !== '';
}

function updateSummary() {
  // ดึง Element ของข้อมูลสถานที่, วันที่ และเวลา
  var locationSummary = document.getElementById('locationSummary');
  var dateSummary = document.getElementById('dateSummary');
  var timeSummary = document.getElementById('timeSummary');

  // กำหนดข้อมูลสถานที่, วันที่ และเวลา
  locationSummary.textContent = "สถานที่: " + document.getElementById('region').value +
                                 " " + document.getElementById('province').value +
                                 " " + document.getElementById('district').value;
  dateSummary.textContent = "วันที่: " + document.getElementById('bookingDate').value;
  timeSummary.textContent = "เวลา: " + document.getElementById('bookingTime').value;
}

function confirmBooking() {
  // ทำตามต้องการเมื่อกดปุ่ม "จอง"
  // ตัวอย่าง: สามารถเรียกฟังก์ชันหรือส่งข้อมูลไปที่เซิร์ฟเวอร์
  alert("การจองเสร็จสมบูรณ์!");
}
function showSummary() {
  // ตรวจสอบความครบถ้วนของข้อมูล
  if (validateBookingData()) {
    // ดึง Element ของ Card สรุปการจอง
    var summaryCard = document.getElementById('summaryCard');
  
    // ตั้งค่า style.display เป็น 'block' เพื่อให้แสดง
    summaryCard.style.display = 'block';
  
    // อัปเดตข้อมูลใน Card
    updateSummary();
  } else {
    // เปิด Modal แสดงข้อความแจ้งเตือน
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
  }
}

function confirmBooking() {
  // ดึง Element ของ Modal ยืนยันการจอง
  var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
  
  // แสดง Modal
  confirmationModal.show();
}
// booking end



// ฟังก์ชันค้นหาสถานที่
function searchLocation() {
  // Get selected values from dropdowns
  var selectedRegion = document.getElementById('region').value;
  var selectedProvince = document.getElementById('province').value;
  var selectedDistrict = document.getElementById('district').value;

  // Your logic to handle the selected location values
  // Example: You can use these values to perform a search or display on the map
  var searchQuery = selectedRegion + ', ' + selectedProvince + ', ' + selectedDistrict;
  
  // Call a function to perform the search or update the map with the selected location
  updateMap(searchQuery);
}

function updateMap(location) {
  // Your logic to update the map with the selected location
  // Example: You can use a mapping API (like Google Maps) to show the location on the map
  // Replace the following line with your actual code
  alert('Searching for: ' + location);
}



// booking history
 // Assume you have a function to fetch booking history data from the server
 function fetchBookingHistory() {
  // Example: Replace this with your actual API call or data retrieval logic
  return [
    { date: '2023-01-01', location: 'Location A' },
    { date: '2023-02-15', location: 'Location B' },
    // Add more data as needed
  ];
}
// Function to populate the booking history list
function populateBookingHistory() {
  var bookingHistory = fetchBookingHistory();

  // Clear existing content
  $('#booking-history-list').empty();

  // Populate the list with booking history data
  bookingHistory.forEach(function (booking) {
    var listItem = $('<li>').text('Date: ' + booking.date + ', Location: ' + booking.location);
    $('#booking-history-list').append(listItem);
  });
}

// Call the function to populate booking history when the tab is shown
$('#bookinghistory').on('shown.bs.tab', function (e) {
  populateBookingHistory();
});
// end booking history





  document.addEventListener("DOMContentLoaded", function () {
    // ค้นหาลิงก์ "How to" และ "Car Model"
    const howToLink = document.querySelector('a[href="#howToContainer"]');
    const carModelLink = document.querySelector('a[href="#carModelContainer"]');

    // หากมีการคลิกที่ลิงก์ "How to"
    howToLink.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector('#howToContainer').scrollIntoView({ behavior: 'smooth' });
    });

    // หากมีการคลิกที่ลิงก์ "Car Model"
    carModelLink.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector('#carModelContainer').scrollIntoView({ behavior: 'smooth' });
    });
  });

















