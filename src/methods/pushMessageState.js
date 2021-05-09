import emitter from '@/methods/emitter';

export default function (response, title = '更新') {
  if (response.data.success) {
    emitter.emit('push-message', {
      style: 'success',
      title: `${title}成功`,
    });
  } else {
    // 有些訊息是字串，有些則是陣列，在此統一格式
    const message = typeof response.data.message === 'string'
      ? [response.data.message] : response.data.message;
    emitter.emit('push-message', {
      style: 'danger',
      title: `${title}失敗`,
      content: message.join('、'),
    });
  }
}
