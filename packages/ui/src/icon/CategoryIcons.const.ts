import type { CategoryIconNames } from './CategoryIcons.type'

export const categoryIconDisplayName: Record<CategoryIconNames, string> = {
  'category-42Seoul': '42Seoul',
  'category-Algorithm': '알고리즘',
  'category-Android': 'Android',
  'category-Apple': 'Apple',
  'category-AppleDeveloperAcademy': 'Apple Developer Academy',
  'category-AppleOS': 'AppleOS',
  'category-Assembly': 'Assembly',
  'category-C': 'C',
  'category-CS': 'Computer Science',
  'category-CSS': 'CSS',
  'category-CSharp': 'C#',
  'category-DeepLearning': '딥러닝',
  'category-Development': '개발 지식',
  'category-Django': 'Django',
  'category-Docker': 'Docker',
  'category-DotNET': '.NET',
  'category-Electron': 'Electron',
  'category-Flutter': 'Flutter',
  'category-GO': 'Go',
  'category-Github': 'Github',
  'category-Google': 'Google',
  'category-Graphics': '그래픽스',
  'category-HTML': 'HTML',
  'category-Haskell': 'Haskell',
  'category-Java': 'Java',
  'category-JavaScript': 'JavaScript',
  'category-Kotlin': 'Kotlin',
  'category-Kubernetes': 'Kubernetes',
  'category-Linux': 'Linux',
  'category-Math': '수학',
  'category-Microsoft': 'Microsoft',
  'category-NGINX': 'NGINX',
  'category-Network': '네트워크',
  'category-NetworkWired': '유선 네트워크',
  'category-NetworkWireless': '무선 네트워크',
  'category-NextJs': 'Next.js',
  'category-Nodejs': 'Node.js',
  'category-Notion': 'Notion',
  'category-OS': '운영체제',
  'category-PHP': 'PHP',
  'category-Python': 'Python',
  'category-React': 'React',
  'category-ReactNative': 'React Native',
  'category-Rust': 'Rust',
  'category-Shell': 'Shell',
  'category-Spring': 'Spring',
  'category-Swift': 'Swift',
  'category-SwiftUI': 'SwiftUI',
  'category-TypeScript': 'TypeScript',
  'category-Ubuntu': 'Ubuntu',
  'category-Unity': 'Unity',
  'category-VScode': 'VS Code',
  'category-Vim': 'Vim',
  'category-Vue': 'Vue.js',
  'category-Web': '웹',
  'category-Windows': 'Windows',
  'category-Xcode': 'Xcode',
  'category-cpp': 'C++',
}
export type categoryIconColor = {
  [key in CategoryIconNames]: {
    bg: string
    fg: string
  }
}
export const categoryIconColor: categoryIconColor = {
  // #000000
  'category-NextJs': { bg: '#000000', fg: '#ffffff' },
  'category-Github': { bg: '#000000', fg: '#ffffff' },
  'category-42Seoul': { bg: '#000000', fg: '#ffffff' },
  // #292C30
  'category-Assembly': { bg: '#292C30', fg: '#ffffff' },
  'category-HTML': { bg: '#292C30', fg: '#ffffff' },
  'category-Kotlin': { bg: '#292C30', fg: '#ffffff' },
  'category-C': { bg: '#292C30', fg: '#ffffff' },
  'category-cpp': { bg: '#292C30', fg: '#ffffff' },
  'category-CSharp': { bg: '#292C30', fg: '#ffffff' },
  'category-Python': { bg: '#292C30', fg: '#ffffff' },
  'category-CSS': { bg: '#292C30', fg: '#ffffff' },
  'category-React': { bg: '#292C30', fg: '#ffffff' },
  'category-ReactNative': { bg: '#292C30', fg: '#ffffff' },
  'category-Vue': { bg: '#292C30', fg: '#ffffff' },
  'category-VScode': { bg: '#292C30', fg: '#ffffff' },
  'category-Notion': { bg: '#292C30', fg: '#ffffff' },
  // #494949
  'category-Apple': { bg: '#494949', fg: '#ffffff' },
  'category-AppleOS': { bg: '#494949', fg: '#ffffff' },
  'category-Haskell': { bg: '#494949', fg: '#ffffff' },
  // #FAFAFF
  'category-Network': { bg: '#FAFAFF', fg: '#000000' },
  'category-NetworkWired': { bg: '#FAFAFF', fg: '#000000' },
  'category-NetworkWireless': { bg: '#FAFAFF', fg: '#000000' },
  'category-Web': { bg: '#FAFAFF', fg: '#000000' },
  'category-CS': { bg: '#FAFAFF', fg: '#000000' },
  'category-OS': { bg: '#FAFAFF', fg: '#000000' },
  'category-DeepLearning': { bg: '#FAFAFF', fg: '#000000' },
  'category-Algorithm': { bg: '#FAFAFF', fg: '#000000' },
  'category-Graphics': { bg: '#FAFAFF', fg: '#000000' },
  'category-Math': { bg: '#FAFAFF', fg: '#000000' },
  'category-Development': { bg: '#FAFAFF', fg: '#000000' },
  'category-Linux': { bg: '#FAFAFF', fg: '#000000' },
  'category-Microsoft': { bg: '#FAFAFF', fg: '#000000' },
  'category-Google': { bg: '#FAFAFF', fg: '#000000' },
  // #C9005F
  'category-AppleDeveloperAcademy': { bg: '#C9005F', fg: '#ffffff' },
  // #F05239
  'category-Swift': { bg: '#F05239', fg: '#ffffff' },
  'category-Java': { bg: '#F05239', fg: '#ffffff' },
  // #F47421
  'category-Ubuntu': { bg: '#F47421', fg: '#ffffff' },
  'category-Rust': { bg: '#F47421', fg: '#ffffff' },
  // #F7DF1E
  'category-JavaScript': { bg: '#F7DF1E', fg: '#000000' },
  // #77BC1F
  'category-Nodejs': { bg: '#77BC1F', fg: '#ffffff' },
  'category-Spring': { bg: '#77BC1F', fg: '#ffffff' },
  // #019639
  'category-NGINX': { bg: '#019639', fg: '#ffffff' },
  'category-Vim': { bg: '#019639', fg: '#ffffff' },
  // #2BA977
  'category-Android': { bg: '#2BA977', fg: '#ffffff' },
  'category-Django': { bg: '#2BA977', fg: '#ffffff' },
  // #08A6ED
  'category-Xcode': { bg: '#08A6ED', fg: '#ffffff' },
  'category-Windows': { bg: '#08A6ED', fg: '#ffffff' },
  'category-Flutter': { bg: '#08A6ED', fg: '#ffffff' },
  // #2396ED
  'category-DotNET': { bg: '#2396ED', fg: '#ffffff' },
  'category-Docker': { bg: '#2396ED', fg: '#ffffff' },
  'category-TypeScript': { bg: '#2396ED', fg: '#ffffff' },
  'category-GO': { bg: '#2396ED', fg: '#ffffff' },
  // #326CE5
  'category-SwiftUI': { bg: '#326CE5', fg: '#ffffff' },
  'category-Kubernetes': { bg: '#326CE5', fg: '#ffffff' },
  // #3E5781
  'category-PHP': { bg: '#3E5781', fg: '#ffffff' },
  // #353C4B
  'category-Electron': { bg: '#353C4B', fg: '#ffffff' },
  'category-Unity': { bg: '#353C4B', fg: '#ffffff' },
  'category-Shell': { bg: '#353C4B', fg: '#ffffff' },
}
