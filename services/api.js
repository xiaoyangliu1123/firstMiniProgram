import { API_KEY } from '../config/keys'

const API_URL = 'https://api.siliconflow.cn/v1/chat/completions'

export const polishText = async (text) => {
  try {
    console.log('开始请求API，参数：', {
      url: API_URL,
      text: text
    })

    const requestData = {
      model: "deepseek-ai/DeepSeek-V3",
      messages: [
        {
          role: "system",
          content: "你是一个文本润色助手。你需要：1. 润色用户的文本，使其更加流畅自然；2. 纠正错别字；3. 提供三个相关的主题标签。请以JSON格式返回，包含润色后的文本(text)和标签数组(tags)。"
        },
        {
          role: "user",
          content: text
        }
      ],
      stream: false,
      max_tokens: 512,
      temperature: 0.7,
      top_p: 0.7,
      top_k: 50,
      frequency_penalty: 0.5,
      n: 1,
      response_format: {
        type: "text"
      }
    }

    console.log('请求数据：', requestData)

    // 使用 Promise 包装 wx.request
    const response = await new Promise((resolve, reject) => {
      wx.request({
        url: API_URL,
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        data: requestData,
        success: (res) => {
          console.log('API响应成功：', res)
          resolve(res)
        },
        fail: (err) => {
          console.error('API请求失败，错误详情：', err)
          reject(new Error(`网络请求失败：${JSON.stringify(err)}`))
        }
      })
    })

    console.log('完整响应：', response)

    if (!response.statusCode) {
      throw new Error('未收到有效响应')
    }

    if (response.statusCode !== 200) {
      console.error('API错误响应：', response.data)
      throw new Error(`API请求失败: ${response.statusCode}, 错误信息: ${JSON.stringify(response.data)}`)
    }

    if (!response.data || !response.data.choices || !response.data.choices[0]) {
      console.error('API响应格式错误：', response.data)
      throw new Error('API响应格式错误')
    }

    try {
      const result = JSON.parse(response.data.choices[0].message.content)
      console.log('解析后的结果：', result)
      
      if (!result.text || !result.tags) {
        console.error('返回数据格式错误：', result)
        throw new Error('返回数据格式错误')
      }
      return result
    } catch (e) {
      console.error('解析响应失败，原始响应：', response.data.choices[0].message.content)
      console.error('解析错误：', e)
      throw new Error('服务响应格式错误')
    }
  } catch (error) {
    console.error('API调用过程中发生错误：', error)
    console.error('错误堆栈：', error.stack)
    throw error
  }
} 