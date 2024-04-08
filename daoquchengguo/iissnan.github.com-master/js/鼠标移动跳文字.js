document.addEventListener("DOMContentLoaded", function() {
    const tooltips = [];
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF']; // 可用的彩色列表

    document.addEventListener('click', function(event) {
        // 随机选择文字和颜色
        const texts = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善'];
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // 创建文字元素
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.innerText = randomText;
        tooltip.style.backgroundColor = randomColor; // 设置背景颜色
        
        // 获取鼠标位置
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const tooltipWidth = tooltip.offsetWidth;
        // 计算水平居中位置
        tooltip.style.left = (mouseX - tooltipWidth / 2) + 'px';
        tooltip.style.top = mouseY + 'px';
        document.body.appendChild(tooltip);
        
        tooltips.push(tooltip);

        setTimeout(function() {
            // 显示文字元素
            tooltip.style.display = 'block';
            setTimeout(function() {
                // 隐藏文字元素
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateY(100%)';
                setTimeout(function() {
                    // 移除文字元素
                    tooltip.remove();
                    tooltips.shift();
                }, 100); // 减少延迟时间
            }, 600); // 减少延迟时间
        }, 100);
    });
});
