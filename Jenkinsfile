pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/KirankumarA1/devops-course.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t netflix-app .'
            }
        }

        stage('Success') {
            steps {
                echo 'CI/CD Pipeline working successfully 🚀'
            }
        }
    }
}