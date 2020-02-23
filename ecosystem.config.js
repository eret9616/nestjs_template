module.exports = {
  apps: [{
    // production生产环境
    name: 'zebra-ui',
    script: 'src/main.js',
    exec_mode: 'cluster',
    instances: '2',
    max_memory_restart: '600M',
    autorestart: true,
    merge_logs: true,
    log_date_format: "YYYY-MM-DD"
  },
  {
    // test测试机环境
    name: 'zebra-ui-test',
    script: 'output/nodeapp/zebra-ui/src/main.js',
    exec_mode: 'cluster',
    max_memory_restart: '600M',
    autorestart: true
  }]
};
