import { joinSessionByType } from '../../utils/session/join.session.js';

export const joinSessionHandler = async (serverInstance, data) => {
  const { responseChannel, type, clientKey, uuid } = data;

  const userData = {
    uuid,
    clientKey,
  };

  const resMessage = {
    isSuccess: false,
  };

  try {
    joinSessionByType(type, userData);

    resMessage.isSuccess = true;
    serverInstance.pubSubManager.publisher.publish(
      responseChannel,
      JSON.stringify(resMessage),
    );
  } catch (e) {
    console.log('에러 발생: ', e);
    const resMessage = {
      isSuccess: false,
    };
    serverInstance.pubSubManager.publisher.publish(
      responseChannel,
      JSON.stringify(resMessage),
    );
  }
};
