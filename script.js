function loadStudentData() {
    let studentId = document.getElementById("student_id").value;
    let jsonFiles = ["json/test_01.json", "json/test_02.json", "json/test_03.json"];

    let table = document.getElementById("testResults");

    jsonFiles.forEach(file => {
        fetch(file)
        .then(response => response.json())
        .then(data => {
            let studentData = data.filter(row => row['ID NUMBER'] === studentId);
            studentData.forEach(row => {
                let newRow = table.insertRow();
                newRow.innerHTML = `
                    <td>${row['TEST NUMBER']}</td>
                    <td>${row['MAT']}</td>
                    <td>${row['PHY']}</td>
                    <td>${row['CHE']}</td>
                    <td>${row['BIO']}</td>
                `;
            });
        });
    });
}
