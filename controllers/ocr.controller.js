const Patient = require("../models/patient.model.js");


// Create and Save a new users

// create new users
exports.store = async function (req, res) {

    //title
    const request = req.body;
    var name_tit = "Họ và tên"
    var age_tit = "Tuổi"
    var gender_tit = "Giới tính"
    var job_tit = "Nghề nghiệp"
    var add_tit = "Địa chỉ"
    var nation_tit = "Dân tộc"
    var day_to_host ="Ngày nhập viện"
    var reason_to_hos_tit = "Lý Do Nhập Viện"
    var status_tit = "Tình trạng lúc nhập viện"
    var symptom_tit = "Triệu chứng"
    var temperature_tit = "Nhiệt độ"
    var blood_pressure_tit = "Huyết áp"
    var pulse_tit = "Mạch"
    var heart_beat_tit = "Nhịp thở"
    var diagnose_tit = "Bệnh:"
    var drug_tit = "Loại thuốc"
    console.log(request)
    var n = '/n'

     const data = request.data_send;
    //data after processing
    var name = data.slice(data.indexOf(name_tit) + name_tit.length +1, data.indexOf(age_tit)).trim();
    var age =  data.slice(data.indexOf(age_tit) + age_tit.length +1, data.indexOf(gender_tit));
    var gender =  data.slice(data.indexOf(gender_tit) + gender_tit.length +1, data.indexOf(job_tit));
    var address =  data.slice(data.indexOf(add_tit) + add_tit.length +1, data.indexOf(day_to_host));
    var job =  data.slice(data.indexOf(job_tit) + job_tit.length +1, data.indexOf(nation_tit));
    var reason_to_hos =  data.slice(data.indexOf(reason_to_hos_tit) + reason_to_hos_tit.length +1, data.indexOf("3."));
    var symptom =  data.slice(data.indexOf(symptom_tit) + symptom_tit.length +1, data.indexOf(pulse_tit));
    var status =  data.slice(data.indexOf(status_tit) + status_tit.length +1, data.indexOf(symptom_tit));
    var pulse = data.slice(data.indexOf(pulse_tit) + pulse_tit.length +1, data.indexOf(temperature_tit));
    var temperature = data.slice(data.indexOf(temperature_tit) + temperature_tit.length +1, data.indexOf(blood_pressure_tit));
    var blood_pressure = data.slice(data.indexOf(blood_pressure_tit) + blood_pressure_tit.length +1, data.indexOf(heart_beat_tit));
    var heart_beat = data.slice(data.indexOf(heart_beat_tit) + heart_beat_tit.length +1, data.indexOf("4. Chẩn đoán"));
    var diagnose = data.slice(data.indexOf(diagnose_tit)  + diagnose_tit.length +1, data.indexOf("5. Kê toa"));
    var drug = data.slice(data.indexOf(drug_tit) + drug_tit.length +1, data.indexOf("Liều lượng"));
    const patient = await Patient.create({  name: name, age: age, gender: gender, job: job, address:address,reason_to_hos: reason_to_hos, symptom: symptom, pulse: pulse,
    temperature: temperature , blood_pressure: blood_pressure, heart_beat: heart_beat, diagnose: diagnose, drug: drug, status: status  });
    console.log (patient)
};
