/*
Installed plugins:
    1. Git plugin
    2. NodeJS Plugin
        Setup:
            1. Manage Jenkins > Tools
            2. Look for "NodeJS installations"
            3. Set Name to 21.4.0 and selection Version to "NodeJS 21.4.0"
    3. Publish Over SSH
        Setup:
            1. Manage Jenkins > System
            2. Look for Publish over SSH
                3. Enter the remote server password in Passphrase
                4. Set name of SSH Server to "digital-ocean"
                5. Hostname is server ip
                6. Username is server username (e.g. root)
                7. Leave the Remote Directory empty
*/

pipeline {
    agent any
    
    tools {nodejs '21.4.0'}

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Print the selected branch
                    echo 'Selected branch: ${params.BRANCH}'

                    // Checkout the code from GitHub
                    def repositoryUrl = 'https://github.com/JackyChong971231/personal-website-v2.git'
                    git url: repositoryUrl, branch: params.BRANCH
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                // Set CI to false to avoid treating warnings as errors
                script {
                    withEnv(["CI=false"]) {
                        // Install Node.js dependencies
                        sh 'npm install'
                        sh 'npx update-browserslist-db@latest'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    withEnv(['CI=false']) {
                        // Build the React app
                        sh 'npm run build'
                    }
                }
            }
        }
        
        stage('Publish & Deploy') {
            steps {
                script {
                    def localDirectory = 'build'
                    
                    echo "Contents of local directory:"
                    sh "ls -al ${localDirectory}"
                    
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'digital-ocean', 
                                transfers: [
                                    sshTransfer(
                                        cleanRemote: false, 
                                        excludes: '', 
                                        execCommand: '''
                                            pm2 delete personal-website
                                            cd /var/www/build-artifacts/personal-website-v2
                                            pm2 serve ./ 5000 --name personal-website --spa
                                        ''', 
                                        execTimeout: 120000, 
                                        flatten: false, 
                                        makeEmptyDirs: false, 
                                        noDefaultExcludes: false, 
                                        patternSeparator: '[, ]+', 
                                        remoteDirectory: '//var/www/build-artifacts/personal-website-v2', 
                                        remoteDirectorySDF: false, 
                                        removePrefix: 'build/', 
                                        sourceFiles: 'build/**/*'
                                    )
                                ], 
                                usePromotionTimestamp: false, 
                                useWorkspaceInPromotion: false, 
                                verbose: false
                            )
                        ]
                    )
                }
            }
        }
    }

        // Add more stages as needed (e.g., testing, deployment)

    post {
        success {
            echo 'Build successful! Do additional tasks if needed.'
        }
        failure {
            echo 'Build failed! Take necessary actions.'
        }
    }
}