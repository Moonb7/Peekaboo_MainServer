import esbuild from 'esbuild';
import glob from 'glob';

esbuild
  .build({
    entryPoints: glob.sync('src/**/*.js'), // 진입 파일
    outdir: 'dist', // 출력 디렉토리
    bundle: false, // 번들링 여부
    platform: 'node', // Node.js 환경
    format: 'esm', // ES 모듈 형식
    minify: false, // 압축 여부
    sourcemap: true, // 소스맵 생성
    target: ['node16'], // 타겟 Node.js 버전
    allowOverwrite: true, // 덮어쓰기
  })
  .catch(() => process.exit(1));