import React from 'react';

const AllowancesDisplay = ({ allowances }) => {
  if (!allowances) return null;

  return (
    <div className="allowances-display">
      <h2>Allowances for {allowances.name}</h2>
      {allowances.tobacco && (
        <div>
          <h3>Tobacco</h3>
          <ul>
            {allowances.tobacco.cigarettes && (
              <li>Cigarettes: {allowances.tobacco.cigarettes.amount} {allowances.tobacco.cigarettes.unit}</li>
            )}
            {allowances.tobacco.cigars && (
              <li>Cigars: {allowances.tobacco.cigars.amount} {allowances.tobacco.cigars.unit}</li>
            )}
            {allowances.tobacco.loose && (
              <li>Loose tobacco: {allowances.tobacco.loose.amount} {allowances.tobacco.loose.unit}</li>
            )}
          </ul>
        </div>
      )}
      {allowances.alcohol && (
        <div>
          <h3>Alcohol</h3>
          <p>Total: {allowances.alcohol.total.amount} {allowances.alcohol.total.unit}</p>
          {allowances.alcohol.options && allowances.alcohol.options.length > 0 && (
            <ul>
              {allowances.alcohol.options.map((option, index) => (
                <li key={index}>{option.type}: {option.amount} {option.unit} {option.details}</li>
              ))}
            </ul>
          )}
        </div>
      )}
      {allowances.perfumes && (
        <div>
          <h3>Perfumes</h3>
          <p>{allowances.perfumes.amount} {allowances.perfumes.unit} {allowances.perfumes.type}</p>
          {allowances.perfumes.notes && <p>Note: {allowances.perfumes.notes}</p>}
        </div>
      )}
    </div>
  );
};

export default AllowancesDisplay;