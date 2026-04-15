pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/KirankumarA1/devops-course.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Application') {
            steps {
                bat 'node server.js'
            }
        }

        stage('Success') {
            steps {
                echo 'CI/CD pipeline without Docker working 🚀'
            }
        }
    }
}