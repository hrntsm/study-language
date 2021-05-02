// 通常の rollup だと nodejs でのプラグイン処理を想定していないので、これを使う
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/app.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    plugins: [
        nodeResolve(),
    ]
};