CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    appointment_date TIMESTAMP NOT NULL,
    doctor_name VARCHAR(100) NOT NULL
);
-- Patients Table
CREATE TABLE Patients (
    patient_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    dob DATE NOT NULL,
    gender VARCHAR(10),
    address TEXT,
    phone VARCHAR(15),
    insurance_info TEXT
);

-- Doctors Table
CREATE TABLE Doctors (
    doctor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    specialty VARCHAR(100),
    phone VARCHAR(15),
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Appointment Table
CREATE TABLE Appointment (
    appointment_id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES Patients(patient_id),
    doctor_id INT REFERENCES Doctors(doctor_id),
    appointment_date TIMESTAMP NOT NULL,
    status VARCHAR(20) DEFAULT 'scheduled'
);

-- Inventory Table
CREATE TABLE Inventory (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    supplier VARCHAR(100),
    received_date DATE,
    expiry_date DATE
);


-- Insert sample patients
INSERT INTO Patients (first_name, last_name, dob, gender, address, phone, insurance_info)
VALUES ('Givens', 'Emmmah', '2002-05-05', 'Male', '080 ABJ Nig', '08052584603', 'Insurance A');

-- Insert sample doctors
INSERT INTO Doctors (first_name, last_name, specialty, phone, email)
VALUES ('Jane', 'Smith', 'Cardiology', '555-5678', 'jane.smith@hospital.com');

-- Insert sample appointments
INSERT INTO Appointments (patient_id, doctor_id, appointment_date, status)
VALUES (1, 1, '2024-09-05 10:00:00', 'scheduled');

-- Insert sample inventory
INSERT INTO Inventory (item_name, quantity, supplier, received_date, expiry_date)
VALUES ('Bandages', 100, 'Supplier A', '2024-09-01', '2025-09-01');
