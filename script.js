class BDSMTest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = new Array(questions.length).fill(null);
        this.scores = {};
        this.categoryResults = {};
        
        this.initializeElements();
        this.attachEventListeners();
        this.initializeScores();
    }

    initializeElements() {
        this.introScreen = document.getElementById('intro-screen');
        this.testScreen = document.getElementById('test-screen');
        this.resultsScreen = document.getElementById('results-screen');
        
        this.startBtn = document.getElementById('start-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.retakeBtn = document.getElementById('retake-btn');
        this.shareBtn = document.getElementById('share-btn');
        
        this.questionText = document.getElementById('question-text');
        this.questionCounter = document.getElementById('question-counter');
        this.progressBar = document.getElementById('progress');
        this.resultsContainer = document.getElementById('results-container');
        
        this.optionButtons = document.querySelectorAll('.option-btn');
    }

    initializeScores() {
        for (const type in bdsmTypes) {
            this.scores[type] = 0;
        }
        // Initialize category results
        for (const category in resultCategories) {
            this.categoryResults[category] = [];
        }
    }

    attachEventListeners() {
        this.startBtn.addEventListener('click', () => this.startTest());
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.retakeBtn.addEventListener('click', () => this.retakeTest());
        this.shareBtn.addEventListener('click', () => this.shareResults());

        this.optionButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.selectOption(parseInt(e.target.dataset.value));
            });
        });
    }

    startTest() {
        this.showScreen(this.testScreen);
        this.showQuestion(0);
    }

    showQuestion(index) {
        this.currentQuestion = index;
        this.questionText.textContent = questions[index];
        this.updateProgress();
        this.updateNavigation();
        this.updateSelectedOption();
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / questions.length) * 100;
        this.progressBar.style.width = `${progress}%`;
        this.questionCounter.textContent = `${this.currentQuestion + 1}/${questions.length}`;
    }

    updateNavigation() {
        this.prevBtn.style.visibility = this.currentQuestion > 0 ? 'visible' : 'hidden';
        this.nextBtn.textContent = this.currentQuestion === questions.length - 1 ? 'See Results' : 'Next';
    }

    updateSelectedOption() {
        this.optionButtons.forEach(button => {
            const value = parseInt(button.dataset.value);
            button.classList.toggle('selected', this.answers[this.currentQuestion] === value);
        });
    }

    selectOption(value) {
        this.answers[this.currentQuestion] = value;
        this.updateSelectedOption();
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.showQuestion(this.currentQuestion - 1);
        }
    }

    nextQuestion() {
        if (this.answers[this.currentQuestion] === null) {
            alert('Please select an answer before continuing.');
            return;
        }

        if (this.currentQuestion < questions.length - 1) {
            this.showQuestion(this.currentQuestion + 1);
        } else {
            this.calculateResults();
            this.showResults();
        }
    }

    calculateResults() {
        // Reset scores
        this.initializeScores();
        
        // Calculate scores for each type
        for (const [type, data] of Object.entries(bdsmTypes)) {
            if (type === 'vanilla') continue;
            
            let typeScore = 0;
            let questionCount = 0;
            
            data.questions.forEach(qIndex => {
                if (this.answers[qIndex] !== null) {
                    let answerValue = this.answers[qIndex] + 2; // Convert -2 to 2 scale to 0 to 4
                    
                    // Handle inverse scoring for types like asexual
                    if (data.inverse) {
                        answerValue = 4 - answerValue;
                    }
                    
                    typeScore += answerValue;
                    questionCount++;
                }
            });
            
            // Calculate percentage with weight
            if (questionCount > 0) {
                const maxPossible = questionCount * 4;
                const rawPercentage = (typeScore / maxPossible) * 100;
                this.scores[type] = Math.min(100, rawPercentage * (data.weight || 1.0));
            }
        }
        
        // Calculate vanilla score based on overall BDSM interest
        const bdsmInterestQuestions = [6, 7, 12, 13, 16, 17, 24, 25, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
        let bdsmInterestScore = 0;
        bdsmInterestQuestions.forEach(qIndex => {
            if (this.answers[qIndex] !== null) {
                bdsmInterestScore += Math.max(0, this.answers[qIndex] + 2);
            }
        });
        
        const maxBDSMPossible = bdsmInterestQuestions.length * 4;
        this.scores.vanilla = Math.max(0, 100 - (bdsmInterestScore / maxBDSMPossible) * 100);
        
        // Organize results by category
        this.organizeResultsByCategory();
    }

    organizeResultsByCategory() {
        for (const category in resultCategories) {
            this.categoryResults[category] = Object.entries(this.scores)
                .filter(([type]) => bdsmTypes[type].category === category)
                .map(([type, score]) => ({
                    type,
                    name: bdsmTypes[type].name,
                    description: bdsmTypes[type].description,
                    score: Math.round(score)
                }))
                .sort((a, b) => b.score - a.score)
                .filter(result => result.score > 10); // Only show results above 10%
        }
    }

    showResults() {
        this.showScreen(this.resultsScreen);
        this.displayCategorizedResults();
    }

    displayCategorizedResults() {
        let resultsHTML = '';
        
        for (const [category, data] of Object.entries(resultCategories)) {
            const categoryResults = this.categoryResults[category];
            
            if (categoryResults.length > 0) {
                resultsHTML += `
                    <div class="category-section">
                        <h2 class="category-title">${data.name}</h2>
                        <p class="category-description">${data.description}</p>
                        <div class="category-results">
                `;
                
                categoryResults.forEach(result => {
                    resultsHTML += `
                        <div class="result-item">
                            <div class="result-header">
                                <span class="result-title">${result.name}</span>
                                <span class="result-percentage">${result.score}%</span>
                            </div>
                            <div class="result-bar">
                                <div class="result-bar-fill" style="width: ${result.score}%"></div>
                            </div>
                            <div class="result-description">${result.description}</div>
                        </div>
                    `;
                });
                
                resultsHTML += `
                        </div>
                    </div>
                `;
            }
        }
        
        // Add overall insights
        resultsHTML += this.generateInsights();
        
        this.resultsContainer.innerHTML = resultsHTML;
        
        // Animate progress bars
        setTimeout(() => {
            document.querySelectorAll('.result-bar-fill').forEach(bar => {
                bar.style.transition = 'width 1.5s ease-in-out';
            });
        }, 100);
    }

    generateInsights() {
        const topOrientation = this.categoryResults.orientation[0];
        const topIdentity = this.categoryResults.identity[0];
        const topRole = this.categoryResults.role[0];
        const topPlaystyle = this.categoryResults.playstyle[0];
        
        return `
            <div class="insights-section">
                <h2>Personal Insights</h2>
                <div class="insights-grid">
                    ${topOrientation ? `
                        <div class="insight-item">
                            <h3>Orientation</h3>
                            <p>Your results suggest you identify most strongly as <strong>${topOrientation.name}</strong> (${topOrientation.score}%)</p>
                        </div>
                    ` : ''}
                    ${topIdentity ? `
                        <div class="insight-item">
                            <h3>Gender Identity</h3>
                            <p>Your gender identity aligns most with <strong>${topIdentity.name}</strong> (${topIdentity.score}%)</p>
                        </div>
                    ` : ''}
                    ${topRole ? `
                        <div class="insight-item">
                            <h3>Primary Role</h3>
                            <p>In power dynamics, you lean toward being <strong>${topRole.name}</strong> (${topRole.score}%)</p>
                        </div>
                    ` : ''}
                    ${topPlaystyle ? `
                        <div class="insight-item">
                            <h3>Play Style</h3>
                            <p>Your dominant play style is <strong>${topPlaystyle.name}</strong> (${topPlaystyle.score}%)</p>
                        </div>
                    ` : ''}
                </div>
                <div class="disclaimer">
                    <strong>Remember:</strong> These results are for self-discovery and exploration only. 
                    Your identity is unique and may not fit perfectly into any category. 
                    Use these insights as starting points for your personal journey.
                </div>
            </div>
        `;
    }

    showScreen(screen) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        screen.classList.add('active');
    }

    retakeTest() {
        this.currentQuestion = 0;
        this.answers.fill(null);
        this.initializeScores();
        this.showScreen(this.introScreen);
    }

    shareResults() {
        const topResults = [];
        
        // Get top result from each category
        for (const category in this.categoryResults) {
            if (this.categoryResults[category].length > 0) {
                topResults.push(this.categoryResults[category][0]);
            }
        }
        
        const resultText = `My Comprehensive BDSM & Identity Test Results:\n\n${
            topResults.slice(0, 5).map(r => `${r.name}: ${r.score}%`).join('\n')
        }\n\nTake the comprehensive test at: [Your GitHub Pages URL]`;
        
        if (navigator.share) {
            navigator.share({
                title: 'My BDSM & Identity Test Results',
                text: resultText
            });
        } else {
            navigator.clipboard.writeText(resultText).then(() => {
                alert('Results copied to clipboard!');
            });
        }
    }
}

// Initialize the test when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new BDSMTest();
});
