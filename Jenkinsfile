pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/KirankumarA1/devops-course.git'
            }
        }

        stage('Test') {
            steps {
                echo 'Pipeline working fine 🚀'
            }
        }
    }
}