/**
 * 文件相关函数
 */
/**
 * 字节单位转换
 * @param {number} bytes 字节数
 * @return {string}
 */
export const bytesToSize = (bytes) => {
  if (bytes === 0) return '0 B'
  const k = 1024 // or 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]
}

/**
 * 业务方法，获取content-disposition的filename（filename自带引号）
 */
export const getResContentDispositionFilename = (response) => {
  const disposition = response.headers['content-disposition']
  if (!disposition) return ''
  const filename = decodeURIComponent(disposition.substring(disposition.indexOf('filename') + (disposition.includes('"') ? 10 : 9), disposition.length - 1))
  return filename || ''
}

/**
 * 文件下载，根据content-disposition的filename重命名
 * @param {response} 响应体
 */
export const renameDownload = (res) => {
  const filename = getResContentDispositionFilename(res) // 获取filename
  const blob = new Blob([res.data]) // 生成blob对象
  download(filename, blob)
}

/**
 * 格式化Blob数据为json
 * @param {response} res
 * @returns {json} json数据
 */
export const renameDownloadCatch = (res) => {
  return new Promise((resolve) => {
    if (res.data.type === 'application/json') {
      const reader = new FileReader() // 创建一个FileReader实例
      reader.readAsText(res.data, 'utf-8') // 读取文件,结果用字符串形式表示
      reader.onload = function() { // 读取完成后,**获取reader.result**
        try {
          resolve(JSON.parse(reader.result))
        } catch (e) {
          resolve(null)
        }
      }
    }
  })
}

/**
 * blob下载
 * @param {string} filename
 * @param {blob} blob
 */
export const download = (filename, blob) => {
  const link = document.createElement('a')

  link.download = filename
  link.href = URL.createObjectURL(blob) // 创建URL对象
  link.click() // 点击下载
  link.remove()
  URL.revokeObjectURL(link.href) // 释放URL对象
}

/**
 * 截取文件名，不包括文件类型
 * @param {string} address 例如：ABC.png
 * @returns {string} ABC
 */
export const getFileName = (address = []) => {
  if (!address) return ''
  const arr = address.split('.')
  return arr.slice(0, arr.length - 1).toString()
}

/**
 * 截取文件类型
 * @param {string} address 例如：ABC.png
 * @returns {string} png
 */
export const getFileType = (address = []) => {
  if (!address) return ''
  const arr = address.split('.')
  return arr[arr.length - 1]
}

/**
 * url 转 base64
 * @param {string} url
 * @returns
 */
export const urlToBase64 = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = function() {
      const canvas = document.createElement('canvas')
      canvas.width = this.naturalWidth
      canvas.height = this.naturalHeight
      // 将图片插入画布并开始绘制
      canvas.getContext('2d').drawImage(image, 0, 0)
      // result
      const result = canvas.toDataURL('image/png')
      resolve(result)
    }
    // CORS 策略，会存在跨域问题https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
    image.setAttribute('crossOrigin', 'Anonymous')
    image.src = url
    // 图片加载失败的错误处理
    image.onerror = () => {
      reject(new Error('urlToBase64 error'))
    }
  })
}

