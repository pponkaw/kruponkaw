# เว็บไซต์เรียนรู้หลักธรรมอริยสัจ 4

เว็บไซต์ static ใช้ HTML, CSS และ JavaScript ไม่มี backend หรือฐานข้อมูล

## เปิดทดสอบในเครื่อง
1. แตกไฟล์ ZIP
2. เปิด `index.html` ใน Chrome, Edge หรือ Firefox ได้โดยตรง
3. หากต้องการใช้ local web server แบบไม่ติดตั้งเพิ่มเติม (มี Python อยู่แล้ว) เปิด Terminal ในโฟลเดอร์นี้ แล้วใช้ `python -m http.server 8000` จากนั้นเข้า `http://localhost:8000`

## เผยแพร่ด้วย GitHub Pages
1. สร้าง repository ใหม่บน GitHub
2. อัปโหลด `index.html`, `style.css`, `script.js` และโฟลเดอร์ `assets` (คงโครงสร้างเดิม)
3. เข้า Settings → Pages
4. ใน Build and deployment เลือก Deploy from a branch, branch `main`, folder `/ (root)` แล้วกด Save
5. รอการเผยแพร่ แล้วใช้ URL ที่ GitHub Pages แสดง

หมายเหตุ: ฟอนต์ Google Fonts จะโหลดเมื่อเชื่อมต่ออินเทอร์เน็ต เว็บไซต์และแบบทดสอบทำงานแบบ client-side.
