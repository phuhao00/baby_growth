// 数据管理类
class DataManager {
    static getAgeGroups() {
        return [
            {
                id: '0-1',
                name: '0-1岁婴儿期',
                ageRange: '0-1岁',
                physicalDevelopment: [
                    '1个月：头部可以转动、能追随物体',
                    '3-6个月：能翻身、抓握玩具',
                    '10-12个月：能爬行、可能开始独立站立',
                    '定期体检频次：1、3、6、8、12月龄',
                    '重点关注：身高、体重增长、运动发育里程碑'
                ],
                mentalDevelopment: [
                    '对母亲声音敏感',
                    '开始社交性微笑',
                    '对周围环境好奇',
                    '情感发展逐渐丰富',
                    '开始建立安全感'
                ],
                nutritionGuide: {
                    calories: '母乳或配方奶为主',
                    protein: '6个月后逐渐添加辅食',
                    fruits: '8个月后可添加果泥',
                    vegetables: '6个月后可添加菜泥',
                    grains: '8个月后可添加米粉'
                },
                activities: [
                    { name: '俯卧抬头', description: '锻炼颈部肌肉', duration: '每次2-3分钟' },
                    { name: '追视训练', description: '用玩具吸引宝宝视线', duration: '每次5-10分钟' },
                    { name: '抓握练习', description: '提供不同质地的玩具', duration: '每次10-15分钟' }
                ]
            },
            {
                id: '1-3',
                name: '1-3岁幼儿期',
                ageRange: '1-3岁',
                physicalDevelopment: [
                    '能独立行走',
                    '逐渐发展精细动作能力',
                    '乳牙逐渐长出',
                    '身高体重稳定增长',
                    '运动协调能力提升'
                ],
                mentalDevelopment: [
                    '自我意识萌芽',
                    '开始独立性探索',
                    '情绪表达逐渐丰富',
                    '语言能力快速发展',
                    '开始理解简单规则'
                ],
                nutritionGuide: {
                    calories: '1000-1200卡路里',
                    protein: '13-20克',
                    fruits: '1杯',
                    vegetables: '1杯',
                    grains: '3盎司'
                },
                activities: [
                    { name: '走路练习', description: '在安全环境中自由行走', duration: '每天30-60分钟' },
                    { name: '搭积木', description: '发展手眼协调能力', duration: '每次15-20分钟' },
                    { name: '简单游戏', description: '躲猫猫、拍手游戏', duration: '每次10-15分钟' }
                ]
            },
            {
                id: '3-6',
                name: '3-6岁学龄前',
                ageRange: '3-6岁',
                physicalDevelopment: [
                    '身高、体重稳定增长',
                    '运动协调能力增强',
                    '肌肉力量逐渐发展',
                    '精细动作技能提升',
                    '平衡能力改善'
                ],
                mentalDevelopment: [
                    '想象力快速发展',
                    '社交能力增强',
                    '开始理解基本道德概念',
                    '注意力持续时间延长',
                    '语言表达能力提升'
                ],
                nutritionGuide: {
                    calories: '1200-1600卡路里',
                    protein: '56-140克',
                    fruits: '1-1.5杯',
                    vegetables: '1-2杯',
                    grains: '3-5盎司'
                },
                activities: [
                    { name: '跑跳游戏', description: '发展大肌肉群', duration: '每天60分钟' },
                    { name: '绘画手工', description: '培养创造力和精细动作', duration: '每次20-30分钟' },
                    { name: '角色扮演', description: '发展社交和想象能力', duration: '每次30-45分钟' }
                ]
            },
            {
                id: '6-12',
                name: '6-12岁学龄期',
                ageRange: '6-12岁',
                physicalDevelopment: [
                    '进入快速生长期',
                    '运动能力显著提升',
                    '性别间身体发育差异开始显现',
                    '肌肉力量和耐力增强',
                    '协调性和灵活性提高'
                ],
                mentalDevelopment: [
                    '逻辑思维能力提升',
                    '同伴关系变得重要',
                    '自尊心和竞争意识增强',
                    '学习能力快速发展',
                    '道德判断能力提升'
                ],
                nutritionGuide: {
                    calories: '1400-2600卡路里',
                    protein: '112-182克',
                    fruits: '1.5-2杯',
                    vegetables: '1.5-3.5杯',
                    grains: '5-9盎司'
                },
                activities: [
                    { name: '团队运动', description: '足球、篮球等集体运动', duration: '每天60-90分钟' },
                    { name: '学习活动', description: '阅读、写作、数学练习', duration: '每天2-3小时' },
                    { name: '兴趣培养', description: '音乐、美术、科学实验', duration: '每次45-60分钟' }
                ]
            }
        ];
    }

    static getAgeGroupById(id) {
        return this.getAgeGroups().find(group => group.id === id) || null;
    }

    static getNutritionRecommendations(age) {
        const ageGroups = this.getAgeGroups();
        let targetGroup;
        
        if (age < 1) targetGroup = ageGroups[0];
        else if (age < 3) targetGroup = ageGroups[1];
        else if (age < 6) targetGroup = ageGroups[2];
        else targetGroup = ageGroups[3];
        
        return targetGroup.nutritionGuide;
    }
}

// UI控制类
class UIController {
    constructor() {
        this.currentTheme = 'light';
        this.currentTab = 'physical';
    }

    init() {
        this.bindEvents();
        this.initTheme();
    }

    bindEvents() {
        // 年龄段卡片点击事件
        document.querySelectorAll('.age-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const ageId = e.currentTarget.dataset.age;
                this.showAgeGroup(ageId);
            });
        });

        // 主题切换
        document.getElementById('theme-toggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // 关闭指南
        document.getElementById('close-guide').addEventListener('click', () => {
            document.getElementById('guide-content').classList.add('hidden');
        });

        // 标签页切换
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const tabName = e.target.dataset.tab;
                this.switchTab(tabName);
            });
        });

        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    showAgeGroup(ageGroupId) {
        const ageGroup = DataManager.getAgeGroupById(ageGroupId);
        if (!ageGroup) return;

        document.getElementById('guide-title').textContent = ageGroup.name;
        document.getElementById('guide-content').classList.remove('hidden');
        
        // 重置标签页
        this.switchTab('physical');
        
        // 滚动到内容区域
        document.getElementById('guide-content').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    switchTab(tabName) {
        // 更新标签页状态
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('tab-active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('tab-active');

        // 获取当前显示的年龄组
        const title = document.getElementById('guide-title').textContent;
        const ageGroup = DataManager.getAgeGroups().find(group => group.name === title);
        if (!ageGroup) return;

        // 更新内容
        const content = document.getElementById('tab-content');
        this.currentTab = tabName;

        switch (tabName) {
            case 'physical':
                content.innerHTML = this.renderPhysicalDevelopment(ageGroup.physicalDevelopment);
                break;
            case 'mental':
                content.innerHTML = this.renderMentalDevelopment(ageGroup.mentalDevelopment);
                break;
            case 'nutrition':
                content.innerHTML = this.renderNutritionGuide(ageGroup.nutritionGuide);
                break;
            case 'activities':
                content.innerHTML = this.renderActivities(ageGroup.activities);
                break;
        }
    }

    renderPhysicalDevelopment(developments) {
        return `
            <div class="space-y-4">
                <h3 class="text-xl font-semibold text-primary mb-4">🏃‍♂️ 身体发展特征</h3>
                <div class="grid gap-3">
                    ${developments.map(item => `
                        <div class="alert alert-info">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>${item}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderMentalDevelopment(developments) {
        return `
            <div class="space-y-4">
                <h3 class="text-xl font-semibold text-primary mb-4">🧠 心理发展特征</h3>
                <div class="grid gap-3">
                    ${developments.map(item => `
                        <div class="alert alert-success">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>${item}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderNutritionGuide(nutrition) {
        return `
            <div class="space-y-4">
                <h3 class="text-xl font-semibold text-primary mb-4">🍎 营养指导建议</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="card bg-orange-50 border border-orange-200">
                        <div class="card-body">
                            <h4 class="font-semibold text-orange-600">每日热量</h4>
                            <p class="text-2xl font-bold text-orange-800">${nutrition.calories}</p>
                        </div>
                    </div>
                    <div class="card bg-red-50 border border-red-200">
                        <div class="card-body">
                            <h4 class="font-semibold text-red-600">蛋白质</h4>
                            <p class="text-2xl font-bold text-red-800">${nutrition.protein}</p>
                        </div>
                    </div>
                    <div class="card bg-green-50 border border-green-200">
                        <div class="card-body">
                            <h4 class="font-semibold text-green-600">水果</h4>
                            <p class="text-2xl font-bold text-green-800">${nutrition.fruits}</p>
                        </div>
                    </div>
                    <div class="card bg-blue-50 border border-blue-200">
                        <div class="card-body">
                            <h4 class="font-semibold text-blue-600">蔬菜</h4>
                            <p class="text-2xl font-bold text-blue-800">${nutrition.vegetables}</p>
                        </div>
                    </div>
                    <div class="card bg-purple-50 border border-purple-200 md:col-span-2">
                        <div class="card-body">
                            <h4 class="font-semibold text-purple-600">谷物</h4>
                            <p class="text-2xl font-bold text-purple-800">${nutrition.grains}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderActivities(activities) {
        return `
            <div class="space-y-4">
                <h3 class="text-xl font-semibold text-primary mb-4">🎯 推荐活动</h3>
                <div class="grid gap-4">
                    ${activities.map(activity => `
                        <div class="card bg-gradient-to-r from-pink-50 to-blue-50 border border-gray-200">
                            <div class="card-body">
                                <h4 class="card-title text-primary">${activity.name}</h4>
                                <p class="text-gray-600">${activity.description}</p>
                                <div class="badge badge-outline">${activity.duration}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    showModal(title, content) {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-content').innerHTML = content;
        document.getElementById('interactive-modal').showModal();
    }

    hideModal() {
        document.getElementById('interactive-modal').close();
    }
}

// 互动功能类
class InteractiveFeatures {
    constructor() {
        this.milestones = {
            '0-1': ['抬头', '翻身', '坐立', '爬行', '站立'],
            '1-3': ['走路', '说话', '自己吃饭', '控制大小便', '简单游戏'],
            '3-6': ['跑跳', '画画', '数数', '社交游戏', '独立穿衣'],
            '6-12': ['阅读', '写字', '运动技能', '团队合作', '逻辑思维']
        };
    }

    async calculateNutrition(age, weight) {
        try {
            const baseNutrition = DataManager.getNutritionRecommendations(age);
            
            // 模拟计算过程
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            return {
                ...baseNutrition,
                calculatedFor: `${age}岁，${weight}公斤`
            };
        } catch (error) {
            console.error('营养计算错误:', error);
            throw error;
        }
    }

    getActivityRecommendations(ageGroup) {
        const group = DataManager.getAgeGroupById(ageGroup);
        return group ? group.activities : [];
    }

    checkMilestone(age, milestone) {
        const ageGroup = age < 1 ? '0-1' : age < 3 ? '1-3' : age < 6 ? '3-6' : '6-12';
        return this.milestones[ageGroup].includes(milestone);
    }

    getMilestonesForAge(age) {
        const ageGroup = age < 1 ? '0-1' : age < 3 ? '1-3' : age < 6 ? '3-6' : '6-12';
        return this.milestones[ageGroup];
    }
}

// 全局变量
let uiController;
let interactiveFeatures;

// 互动功能函数
window.openMilestoneChecker = function() {
    const content = `
        <div class="space-y-4">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">孩子年龄</span>
                </label>
                <input type="number" id="milestone-age" class="input input-bordered" placeholder="请输入年龄" min="0" max="12" step="0.1">
            </div>
            <button class="btn btn-primary w-full" onclick="checkMilestones()">检查里程碑</button>
            <div id="milestone-results"></div>
        </div>
    `;
    uiController.showModal('成长里程碑检查器', content);
};

window.checkMilestones = function() {
    const age = parseFloat(document.getElementById('milestone-age').value);
    if (isNaN(age) || age < 0 || age > 12) {
        document.getElementById('milestone-results').innerHTML = '<div class="alert alert-error">请输入有效的年龄（0-12岁）</div>';
        return;
    }

    const milestones = interactiveFeatures.getMilestonesForAge(age);
    const resultsHtml = `
        <div class="mt-4">
            <h4 class="font-semibold mb-2">该年龄段的发展里程碑：</h4>
            <div class="space-y-2">
                ${milestones.map(milestone => `
                    <div class="flex items-center space-x-2">
                        <input type="checkbox" class="checkbox checkbox-primary" id="milestone-${milestone}">
                        <label for="milestone-${milestone}" class="label-text">${milestone}</label>
                    </div>
                `).join('')}
            </div>
            <div class="alert alert-info mt-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>请勾选孩子已经达到的里程碑。如有疑问，建议咨询儿科医生。</span>
            </div>
        </div>
    `;
    document.getElementById('milestone-results').innerHTML = resultsHtml;
};

window.openNutritionCalculator = function() {
    const content = `
        <div class="space-y-4">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">孩子年龄</span>
                </label>
                <input type="number" id="nutrition-age" class="input input-bordered" placeholder="请输入年龄" min="0" max="12" step="0.1">
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">孩子体重（公斤）</span>
                </label>
                <input type="number" id="nutrition-weight" class="input input-bordered" placeholder="请输入体重" min="1" max="100" step="0.1">
            </div>
            <button class="btn btn-primary w-full" onclick="calculateNutrition()">计算营养需求</button>
            <div id="nutrition-results"></div>
        </div>
    `;
    uiController.showModal('营养需求计算器', content);
};

window.calculateNutrition = async function() {
    const age = parseFloat(document.getElementById('nutrition-age').value);
    const weight = parseFloat(document.getElementById('nutrition-weight').value);
    
    if (isNaN(age) || isNaN(weight) || age < 0 || age > 12 || weight < 1) {
        document.getElementById('nutrition-results').innerHTML = '<div class="alert alert-error">请输入有效的年龄和体重</div>';
        return;
    }

    document.getElementById('nutrition-results').innerHTML = '<div class="loading loading-spinner loading-md"></div>';

    try {
        const nutrition = await interactiveFeatures.calculateNutrition(age, weight);
        const resultsHtml = `
            <div class="mt-4">
                <h4 class="font-semibold mb-2">营养需求建议（${nutrition.calculatedFor}）：</h4>
                <div class="grid grid-cols-2 gap-2">
                    <div class="stat bg-orange-50 rounded-lg p-3">
                        <div class="stat-title text-orange-600">热量</div>
                        <div class="stat-value text-orange-800 text-lg">${nutrition.calories}</div>
                    </div>
                    <div class="stat bg-red-50 rounded-lg p-3">
                        <div class="stat-title text-red-600">蛋白质</div>
                        <div class="stat-value text-red-800 text-lg">${nutrition.protein}</div>
                    </div>
                    <div class="stat bg-green-50 rounded-lg p-3">
                        <div class="stat-title text-green-600">水果</div>
                        <div class="stat-value text-green-800 text-lg">${nutrition.fruits}</div>
                    </div>
                    <div class="stat bg-blue-50 rounded-lg p-3">
                        <div class="stat-title text-blue-600">蔬菜</div>
                        <div class="stat-value text-blue-800 text-lg">${nutrition.vegetables}</div>
                    </div>
                </div>
                <div class="alert alert-info mt-4">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>以上数据仅供参考，具体营养需求请咨询专业营养师。</span>
                </div>
            </div>
        `;
        document.getElementById('nutrition-results').innerHTML = resultsHtml;
    } catch (error) {
        document.getElementById('nutrition-results').innerHTML = '<div class="alert alert-error">计算过程中出现错误，请重试</div>';
    }
};

window.openActivityRecommender = function() {
    const content = `
        <div class="space-y-4">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">选择年龄段</span>
                </label>
                <select id="activity-age-group" class="select select-bordered">
                    <option value="">请选择年龄段</option>
                    <option value="0-1">0-1岁</option>
                    <option value="1-3">1-3岁</option>
                    <option value="3-6">3-6岁</option>
                    <option value="6-12">6-12岁</option>
                </select>
            </div>
            <button class="btn btn-primary w-full" onclick="getActivityRecommendations()">获取活动推荐</button>
            <div id="activity-results"></div>
        </div>
    `;
    uiController.showModal('活动推荐器', content);
};

window.getActivityRecommendations = function() {
    const ageGroup = document.getElementById('activity-age-group').value;
    if (!ageGroup) {
        document.getElementById('activity-results').innerHTML = '<div class="alert alert-error">请选择年龄段</div>';
        return;
    }

    const activities = interactiveFeatures.getActivityRecommendations(ageGroup);
    const resultsHtml = `
        <div class="mt-4">
            <h4 class="font-semibold mb-2">推荐活动：</h4>
            <div class="space-y-3">
                ${activities.map(activity => `
                    <div class="card bg-gradient-to-r from-pink-50 to-blue-50 border border-gray-200">
                        <div class="card-body p-4">
                            <h5 class="font-semibold text-primary">${activity.name}</h5>
                            <p class="text-gray-600 text-sm">${activity.description}</p>
                            <div class="badge badge-outline badge-sm">${activity.duration}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    document.getElementById('activity-results').innerHTML = resultsHtml;
};

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    uiController = new UIController();
    interactiveFeatures = new InteractiveFeatures();
    uiController.init();
});

// 导出类供其他模块使用
export { DataManager, UIController, InteractiveFeatures };