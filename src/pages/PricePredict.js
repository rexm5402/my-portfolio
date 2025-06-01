// PricePredict.js
import React from 'react';
import '../App.css';

function PricePredict() {
  return (
    <main className="detail-page">
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#333' }}>
        ML-Based Industry Price Prediction
      </h1>
      <h3 style={{ color: '#555', marginBottom: '1.5rem' }}>
        Academic Project | Regression Modeling | PES University | 2023
      </h3>

      <p>
        This project focused on building a machine learning regression model to predict the prices of industrial products using historical data, demand patterns, and market-driven features. The goal was to assist manufacturers and suppliers in making data-driven pricing decisions that improve revenue forecasting and market competitiveness.
      </p>

      <h2 style={{ marginTop: '1.5rem' }}>Project Objective</h2>
      <p>
        To develop a supervised machine learning model capable of predicting the expected price of an item or service based on product characteristics and economic indicators across various industrial sectors.
      </p>

      <h2 style={{ marginTop: '1.5rem' }}>Approach & Methodology</h2>
      <ul>
        <li>Collected and preprocessed a structured dataset comprising historical prices, category metadata, supply chain information, and macroeconomic trends.</li>
        <li>Conducted extensive data cleaning, handled outliers, and engineered relevant features to boost model accuracy.</li>
        <li>Tested and evaluated multiple regression algorithms to identify the best-performing approach in terms of predictive power and generalization.</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}>ML Techniques Used</h2>
      <ul>
        <li><strong>Linear Regression:</strong> Used as a baseline model to establish a point of comparison.</li>
        <li><strong>Random Forest Regression:</strong> Helped capture complex, non-linear relationships while mitigating overfitting.</li>
        <li><strong>XGBoost Regression:</strong> Delivered superior performance through gradient boosting and L1/L2 regularization.</li>
        <li><strong>Grid Search and Cross-Validation:</strong> Applied to tune hyperparameters and validate model consistency across splits.</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}>Results & Performance</h2>
      <ul>
        <li>Achieved a <strong>Mean Absolute Error (MAE) below 6%</strong> using the final XGBoost model.</li>
        <li>Conducted feature importance analysis to reveal the most influential factors affecting price trends.</li>
        <li>Designed an optional interactive dashboard to visualize predictions and monitor model behavior across different product categories.</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}>Tools & Technologies</h2>
      <ul>
        <li>Python (pandas, NumPy, scikit-learn, matplotlib, seaborn)</li>
        <li>Jupyter Notebook for iterative development and EDA</li>
        <li>XGBoost, Random Forest, Linear Regression</li>
        <li>Seaborn for generating correlation matrices and heatmaps</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}>Key Learnings & Contributions</h2>
      <ul>
        <li>Gained hands-on experience in the full lifecycle of regression modeling, from data preprocessing to model optimization.</li>
        <li>Learned the impact of hyperparameter tuning and ensemble learning techniques in improving predictive outcomes.</li>
        <li>Applied explainability techniques to interpret model results and provide actionable business insights.</li>
      </ul>

      <p style={{ marginTop: '1.5rem' }}>
        This project demonstrated how predictive analytics can be used to support pricing strategies in highly dynamic industrial environments. By identifying key pricing drivers and minimizing human bias, the model provides a foundation for scalable, data-informed financial decision-making.
      </p>
    </main>
  );
}

export default PricePredict;
