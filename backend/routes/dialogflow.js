// backend/routes/dialogflow.js
const express = require('express');
const dialogflow = require('@google-cloud/dialogflow');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

// Le o project id da env (defina DIALOGFLOW_PROJECT_ID)
const projectId = process.env.DIALOGFLOW_PROJECT_ID;
if (!projectId) {
  console.warn('Warning: DIALOGFLOW_PROJECT_ID não definido nas variáveis de ambiente');
}

router.post('/detect-intent', async (req, res) => {
  const { message, sessionId } = req.body;
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'message (string) é obrigatório no body' });
  }

  const sessionIdSafe = sessionId || uuidv4();

  try {
    const sessionClient = new dialogflow.SessionsClient(); // usa GOOGLE_APPLICATION_CREDENTIALS
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionIdSafe);

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: message,
          languageCode: 'pt-BR',
        },
      },
    };

    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult || {};

    return res.json({
      text: result.fulfillmentText || '',
      intent: result.intent ? result.intent.displayName : null,
      confidence: result.intentDetectionConfidence || 0,
      sessionId: sessionIdSafe
    });
  } catch (err) {
    console.error('Erro Dialogflow detect-intent:', err);
    return res.status(500).json({ error: 'Erro ao comunicar com Dialogflow' });
  }
});

module.exports = router;
